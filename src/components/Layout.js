import dynamic from 'next/dynamic';
//  Global Components
import SEO from 'components/SEO';
import Header from 'components/Header';
import HeaderBlog from 'components/HeaderBlog';
//  Lazy Loads
const Footer = dynamic(() => import('components/Footer'));

const Layout = ({ children, title, description, url, thumbnail, type = 'default', categories }) => {
  return (
    <div className="layout">
      <SEO title={title} description={description} url={url} thumbnail={thumbnail} />
      {type === 'blog' ? <HeaderBlog categories={categories} /> : <Header />}
      {/* <main style={{ marginTop: type === 'blog' ? '' : '85px' }}>{children}</main> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
