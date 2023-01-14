import Link from 'next/link';
//   Global Components
import CategoryTags from 'components/CategoryTags';
import ProgressiveImage from 'components/ProgressiveImage';
//   Global Components
import { blog_post_image_sizes } from 'utils';

const CardBlogPost = ({
  //
  title,
  slug = '/',
  description,
  categories,
  image: original_image = '/img/placeholder.jpg',
  main,
}) => {
  // prettier-ignore
  const image = main
        ? `${original_image}?w=${blog_post_image_sizes.main.retina.width}&h=${blog_post_image_sizes.main.retina.height}`
        : `${original_image}?w=${blog_post_image_sizes.other.retina.width}&h=${blog_post_image_sizes.other.retina.height}`;

  return (
    <figure className="card" data-main={main}>
      <Link href={slug} passHref>
        <a className="card-img-link-wrapper" title={title}>
          <ProgressiveImage
            //
            alt={title}
            width={main ? blog_post_image_sizes.main.normal.width : blog_post_image_sizes.other.normal.width}
            height={main ? blog_post_image_sizes.main.normal.height : blog_post_image_sizes.other.normal.width}
            original_image={image}
            desktop={[
              { type: 'image/jpeg', srcSet: `${image}&fm=jpg` },
              { type: 'image/webp', srcSet: `${image}&fm=webp` },
            ]}
          />
        </a>
      </Link>
      <figcaption>
        <CategoryTags categories={categories} />
        <h2 className="card-title">
          <Link href={slug} passHref>
            <a title={title}>{title}</a>
          </Link>
        </h2>
        {/* {description && <p className="card-description">{description}</p>} */}
        {/* {show_link && (
          <a href={slug} className="card-link" title={title}>
            Learn more
          </a>
        )} */}
      </figcaption>
    </figure>
  );
};

export default CardBlogPost;
