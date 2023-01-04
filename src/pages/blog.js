import { useState } from 'react';
import dynamic from 'next/dynamic';
//  Context
import { Consumer } from 'pages/_app';
//  Global Components
import Cards from 'components/Cards';
import Layout from 'components/Layout';
import CardBlogPost from 'components/CardBlogPost';
//  Client
import { getPosts, getEbooks } from 'client';
//  Lazy Loads
const Ebook = dynamic(() => import('components/Ebook'));
const Button = dynamic(() => import('components/Button'));
const CTABlock = dynamic(() => import('components/CTABlock'));

const per_page = 5;

const getPostByPage = (page) =>
  getPosts({
    limit: per_page * page + per_page,
    offset: page * per_page,
    order: { field: '_createdAt', type: 'desc' },
  });

const Blog = ({ popular_reads = [], blog_posts = [], page = 1, show_load_more, ebook }) => {
  // Hooks
  const [currentPage, setPage] = useState(page);
  const [blogPosts, setBlogPosts] = useState(blog_posts);
  const [showLoadMore, setShowLoadMore] = useState(show_load_more);

  return (
    <Consumer>
      {({ pagesContent: { blog: blogContent } }) => (
        <Layout title="Blog" type="blog">
          <div className="blog">
            <section className="popular-reads">
              <div className="container">
                <h1 className="section-title-main">{blogContent.popular.title}</h1>
                <div className="main-two-posts">
                  {popular_reads.slice(0, 2).map((post, i) => (
                    <CardBlogPost {...(i === 1 ? { main: true } : { main: false })} key={i} {...post} />
                  ))}
                </div>
                <Cards type="blog" cards={popular_reads.slice(2, popular_reads.length)} />
              </div>
            </section>
            <Ebook link={ebook.file} poster={ebook.poster} title={ebook.title} buttonLabel={ebook.cta} />
            <section className="recent-stories">
              <div className="container">
                <h1 className="section-title-main">{blogContent.recent.title}</h1>
                <div className="main-two-posts">
                  {blogPosts.slice(0, 2).map((post, i) => (
                    <CardBlogPost {...(i === 0 ? { main: true } : { main: false })} key={i} {...post} />
                  ))}
                </div>
                <Cards type="blog" cards={blogPosts.slice(2)} />
                {showLoadMore && (
                  <Button
                    data-size="md"
                    style-type="primary"
                    block=""
                    onClick={() => {
                      let nextPage = currentPage + 1;
                      getPostByPage(nextPage).then((res) => {
                        setBlogPosts((prevState) => [...prevState, ...res]);
                        setPage(nextPage);
                        if (res.length < per_page) {
                          setShowLoadMore(false);
                        }
                      });
                    }}
                  >
                    {blogContent.recent.field1}
                  </Button>
                )}
              </div>
            </section>
            <CTABlock {...blogContent.cta} />
          </div>
        </Layout>
      )}
    </Consumer>
  );
};

export async function getServerSideProps() {
  const page = 0;
  const [total_post_count, popular_reads, blog_posts, ebooks] = await Promise.all([
    //
    getPosts({ returnCount: true }),
    getPosts({ isPopular: true, limit: 6, order: { field: '_createdAt', type: 'desc' } }),
    getPostByPage(0),
    getEbooks({ tags: ['Blog page'] }),
  ]);

  const show_load_more = blog_posts.length <= total_post_count;

  return { props: { popular_reads, blog_posts, page, show_load_more, ebook: ebooks[0] } };
}

export default Blog;
