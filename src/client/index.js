import groq from 'groq';
import axios from 'redaxios';
import sanityClient from '@sanity/client';
import Zoom from 'react-medium-image-zoom';
import imageUrlBuilder from '@sanity/image-url';
import 'react-medium-image-zoom/dist/styles.css';
//  Global Components
import Ebook from 'components/Ebook';
import Player from 'components/Player';
import CTASection from 'components/CTASection';
import Blockquote from 'components/Blockquote';
import ProgressiveImage from 'components/ProgressiveImage';
import { buildFileUrl, getFileAsset } from '@sanity/asset-utils';

// Initialize sanity client
export const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  token: process.env.SANITY_PROJECT_TOKEN,
  useCdn: false, // `false` if you want to ensure fresh data
});

// Get a pre-configured url-builder from your sanity client
const urlBuilder = imageUrlBuilder(client);
export const urlFor = (source) => urlBuilder.image(source);

// runQuery function runs given query on the client side and almost all methods use this function to send requests to backend api
const runQuery = async (query) => {
  // test
  console.log('runQuery -> query', query);
  try {
    const response = await client.fetch(query);
    return response;
  } catch (error) {
    throw error;
  }
};

const postObject = (loadContentBody = false, loadDescription = false, loadRelatedPosts = false) => groq`
    {
        _id,
        title,
        'slug': '/blog/' + slug.current,
        'date': _createdAt,
        'image': mainImage.asset->url,
        'tags': tags[]->{name, color},
        'categories': categories[]->{title, 'slug': '/category/' + slug.current, color},
        ${loadContentBody ? 'body,' : ''}
        ${loadDescription ? 'description,' : ''}
        ${
          loadRelatedPosts
            ? `'related_posts': related_posts[]-> {
          title,
          'slug': '/blog/' + slug.current,
          'date': _createdAt,
          'image': mainImage.asset->url,
          'tags': tags[]->{name, color},
          'categories': categories[]->{title, 'slug': '/category/' + slug.current, color},
          },`
            : ''
        }
        'author': author->{
          full_name,
          position,
          email,
          external_link,
          bio,
          'avatar': image.asset->url,
          'slug': slug->{current}
        },
        'cta': cta
    }
`;

export const apiPost = async (endpoint, data, options = {}) => {
  try {
    const response = await axios.post(endpoint, data, { ...options, mode: 'no-cors' });
    return response;
  } catch (error) {
    throw error;
  }
};

// All Blog Posts
export const getPosts = ({
  //
  limit = 100,
  tags,
  categories,
  category = '',
  order = { field: '_createdAt', type: 'desc' },
  isPopular,
  customFilters,
  loadContentBody = false,
  offset = 0,
  returnCount = false,
  search_keyword = '',
}) => {
  let orderQuery = '';
  let tagFilterQuery = '';
  let isPopularQuery = '';
  let isRecentQuery = '';
  let categoriesFilterQuery = '';
  let categoryFilterQuery = '';
  let searchQuery = '';

  if (order) {
    orderQuery = `| order(${order.field} ${order.type})`;
  }

  if (tags !== undefined && tags.length > 0) {
    tagFilterQuery = ` && tags[]->name match ${JSON.stringify(tags)} `;
  }

  if (categories !== undefined && categories.length > 0) {
    categoriesFilterQuery = ` && categories[]->slug.current match ${JSON.stringify(categories)} `;
  }

  if (category) {
    categoryFilterQuery = ` && categories[]->slug.current match ${JSON.stringify(category)} `;
  }

  if (isPopular) {
    isPopularQuery = groq` && is_popular == ${isPopular} `;
  }

  if (search_keyword.trim()) {
    searchQuery = groq` && (body[].children[].text match "${search_keyword}" || title match "${search_keyword}") `;
  }

  let filters = groq`[_type == "post" ${isPopularQuery} ${tagFilterQuery} ${isRecentQuery} ${categoriesFilterQuery} ${categoryFilterQuery} ${searchQuery} ${customFilters || ''} && !(_id in path('drafts.**'))]`;

  // prettier-ignore
  return runQuery(
    returnCount
      ? groq`count(*${filters})`
      : groq`* | ${filters} ${orderQuery} [${offset}..${limit - 1}] ${postObject(loadContentBody)}`);
};

// Page
export const getPageData = ({ slug }) => runQuery(groq`* | [_type == "page" && slug.current == '${slug}']`);
// Popular Posts
export const getPopularReads = ({ tags }) => getPosts({ limit: 6, tags: tags, isPopular: true });
// Related Posts
export const getRelatedPosts = ({ tags, categories, postId }) => getPosts({ limit: 6, tags: tags, customFilters: postId && `&& _id != '${postId}'` });
// Single Blog Posts
export const getPost = (slug) => {
  const query = groq`
    *
    | [_type == "post" && slug.current == "${slug}"]
    | ${postObject(true, true, true)}
  `;

  return runQuery(query);
};
// Solutions
export const getSolutions = ({ type, tags = [] }) => {
  let tagFilterQuery = '';
  if (tags.length > 0) tagFilterQuery = `&& tags[]->name match ${JSON.stringify(tags)}`;

  const query = groq`
    *
    | [_type == "${type}-solution" && !(_id in path('drafts.**')) ${tagFilterQuery}]
    | order(order asc)
		| {
  		title,
      description,
      'image': image.asset->url,
      'slug': '/solutions/${type}/' + slug.current,
		}
  `;

  return runQuery(query);
};
// "_type":"capability-solution"
// "slug":"test-case-testing"
export const getSolutionsLinks = () => {
  const query = groq`
    * [_type in ["capability-solution", "industry-solution"] && !(_id in path('drafts.**'))]
    | order(order asc)
    | {
      title,
      _type,
      'slug': slug.current
    }
  `;

  return runQuery(query);
};
// Single Solution Item
export const getSolution = ({ type, slug }) => {
  const query = groq`
    *
    | [_type == "${type}-solution" && slug.current == "${slug}"]
		| {
      cta,
      title,
      body,
      description,
      cards_section,
      internal_title,
      highlights_title,
      'cover_image': cover_image.asset->url,
      'illustration': illustration.asset->url,
      ${type === 'capability' ? 'body,' : ''}
      'apps': apps[]->{ title, 'img': image.asset->url },
      'highlights': highlights[]{ title, description,'illustration': illustration.asset->url },
      'related_app_categories': related_app_categories[]->{ title, 'image': image.asset->url },
      'related_capability_solutions': related_capability_solutions[]->{ title, 'slug': '/solutions/${type}/' + slug.current, 'image': image.asset->url },
		}
  `;

  return runQuery(query);
};
// Single Solution Item
export const getEbooks = ({ tags }) => {
  let tagFilterQuery = '';
  if (tags !== undefined && tags.length > 0) {
    tagFilterQuery = `&& tags[]->name match ${JSON.stringify(tags)} `;
  }

  const query = groq`
    *
    | [_type == "ebook" && !(_id in path('drafts.**')) ${tagFilterQuery}]
		| {
      cta,
      title,
      'file': file.asset->url,
      'poster': poster.asset->url,
		}
  `;

  return runQuery(query);
};
// Categories
export const getCategories = ({ slug, limit = 100, offset = 0 }) => {
  let slugQuery = '';

  if (slug) {
    slugQuery = groq` && slug.current == "${slug}"`;
  }

  const query = groq`
    *
    | [_type == "category" ${slugQuery}][${offset}..${limit}] | order(_createdAt desc)
		| {
  		'label': title,
      'value': '/category/' + slug.current,
      'slug': '/category/' + slug.current,
      'cta': cta
		}
  `;

  return runQuery(query);
};

export const getPagesContent = () => {
  const query = groq`
  *
  | [_type == "pages_content"]
  `;

  return runQuery(query);
};

export const preparePagesContent = (rawPagesContent) => {
  // a little bit processing we need to make website faster on runtime.
  // what we do here is transforming array of dataset into object
  // which we can call each key as json attribute
  let pagesContent = {};

  rawPagesContent.forEach((datasetObj) => {
    pagesContent[datasetObj.dataset] = {};

    datasetObj.section?.forEach((content) => {
      pagesContent[datasetObj.dataset][content.key] = {
        key: content.key,
        title: content.title,
        description: content.description,
        items: content.text,
        field1: content.field1,
        field2: content.field2,
        field3: content.field3,
      };
    });

    pagesContent[datasetObj.dataset].cta = datasetObj.cta;
  });

  return pagesContent;
};

export const checkContent = (params, renderFunc) => {
  params.forEach((param) => {
    if (param == null || param == undefined) {
      return <span>!!! Content not found !!!</span>;
    }
  });

  return renderFunc;
};

export const blockContentSerializers = {
  types: {
    videoWithCaption: ({ node: { thumbnail, videoUrl, direction, caption } }) => {
      return (
        <Player
          //
          url={videoUrl}
          direction={direction}
          description={caption}
          light={thumbnail ? urlFor(thumbnail.asset).url() : '/img/placeholder.jpg'}
        />
      );
    },
    simpleImage: ({ node: { image, alt } }) => {
      return (
        <div className="simple-image-wrapper">
          <img className="simple-image" alt={alt} src={urlFor(image.asset)} />
        </div>
      );
    },
    imageWithCaption: ({ node: { description, image } }) => {
      return (
        <div className="image-block">
          <Zoom>
            <ProgressiveImage
              className="full-width"
              alt={description}
              original_image={urlFor(image.asset)}
              mobile={[
                { type: 'image/jpeg', srcSet: `${urlFor(image.asset)}?fm=jpg&w=640` },
                { type: 'image/webp', srcSet: `${urlFor(image.asset)}?fm=webp&w=640` },
              ]}
              desktop={[
                { type: 'image/jpeg', srcSet: `${urlFor(image.asset)}?fm=jpg&w=2200` },
                { type: 'image/webp', srcSet: `${urlFor(image.asset)}?fm=webp&w=2200` },
              ]}
            />
          </Zoom>
          <small>{description}</small>
        </div>
      );
    },
    customEbook: ({ node: { title, poster, file, cta } }) => {
      const link = getFileAsset(file.asset._ref, { dataset: 'production', projectId: process.env.SANITY_PROJECT_ID }).url;
      return (
        <Ebook
          //
          link={link}
          title={title}
          buttonLabel={cta}
          poster={urlFor(poster.asset)}
        />
      );
    },
    banner: ({ node: { image } }) => {
      return (
        <aside className="aside-banner" style={{ float: 'right' }}>
          <picture>
            <source srcSet={urlFor(image.asset) + '?fm=webp'} type="image/webp" />
            <source srcSet={urlFor(image.asset) + '?fm=jpeg'} type="image/jpeg" />
            <img src={urlFor(image.asset)} alt={image.alt} loading="lazy" />
          </picture>
        </aside>
      );
    },
    blockquote: ({ node: { cite, color, view_type, quote_text, author_avatar, author_name, author_position } }) => (
      <Blockquote
        //
        cite={cite}
        color={color}
        type={view_type}
        text={quote_text}
        author_type={view_type}
        author={{ full_name: author_name, position: author_position, avatar: urlFor(author_avatar) }}
      />
    ),
    cta: ({ node: { title, buttonLabel, description, link, image } }) => (
      <CTASection
        //
        link={link}
        title={title}
        buttonLabel={buttonLabel}
        img={(image && urlFor(image.asset)) || undefined}
      />
    ),
  },
};
