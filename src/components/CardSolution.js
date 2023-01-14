import Link from 'next/link';
//   Global Components
import CategoryTags from 'components/CategoryTags';

const CardSolution = ({ image = '/img/placeholder.jpg', slug, title, description, categories }) => {
  return (
    <figure className="card">
      {slug ? (
        <Link href={slug} passHref>
          <a className="card-img-link-wrapper" title={title}>
            <img src={image} alt={title} loading="lazy" width="352px" height="200px" />
          </a>
        </Link>
      ) : (
        <img src={image} alt={title} loading="lazy" width="352px" height="200px" />
      )}
      <figcaption>
        <CategoryTags categories={categories} />
        <h2 className="card-title">
          {slug ? (
            <Link href={slug} passHref>
              <a title={title}>{title}</a>
            </Link>
          ) : (
            title
          )}
        </h2>
        {description && <p className="card-description">{description}</p>}
      </figcaption>
    </figure>
  );
};

export default CardSolution;
