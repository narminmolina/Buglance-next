import Link from 'next/link';

const CategoryTags = ({ categories = [] }) => {
  return (
    categories.length !== 0 && (
      <div className="category-tags">
        {categories.map(({ title, slug }, i) => (
          <Link key={i} href={slug} passHref>
            <a title={title}>{title}</a>
          </Link>
        ))}
      </div>
    )
  );
};

export default CategoryTags;
