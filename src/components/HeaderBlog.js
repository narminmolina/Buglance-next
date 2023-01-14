import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect, Fragment } from 'react';
//  Context
import { Consumer } from 'pages/_app';
//  Global Components
// import Menu from 'components/Menu';
import NavLink from 'components/NavLink';
import Dropdown from 'components/Dropdown';
import SearchInput from 'components/SearchInput';
//  SVG
import { BuglanceLogoHorizontal, BuglanceLogoIcon, Search } from 'svg';

const HeaderBlog = () => {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [openSearch, setOpenSearch] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [openHamburger, setOpenHamburger] = useState(false);
  const [hamburgerHeight, setHamburgerHeight] = useState(0);

  useEffect(() => {
    setHamburgerHeight(document.documentElement.clientHeight);
  }, []);

  useEffect(() => {
    if (openHamburger) document.body.classList.add('body-hidden');
    if (!openHamburger) document.body.classList.remove('body-hidden');
  }, [openHamburger]);

  const activeCategoryHandler = (categories) => {
    const categoryName = router.asPath;
    setCategories(categories);
    const selectedCategory = categories.slice(3).filter(({ slug }) => slug === categoryName);
    if (selectedCategory.length) setSelectedCategory(selectedCategory[0]);
  };

  return (
    <Consumer>
      {({ categories }) => {
        activeCategoryHandler(categories);
        return (
          <header className="header-blog">
            <div className="container">
              <div className="header-blog-wrapper">
                <div className="logo-wrapper">
                  <Link href="/" passHref>
                    <a className="buglance-logo" title="Home page">
                      <BuglanceLogoHorizontal role="img" aria-label="Buglance Logo" />
                    </a>
                  </Link>
                  <Link href="/blog" passHref>
                    <a className="buglance-logo" title="Home page">
                      <span className="category-name">Blog</span>
                    </a>
                  </Link>
                </div>
                <div className="logo-wrapper mobile-logo">
                  <Link href="/" passHref>
                    <a className="buglance-logo" title="Home page">
                      <BuglanceLogoIcon role="img" aria-label="Buglance Logo" />
                    </a>
                  </Link>
                  <Link href="/blog" passHref>
                    <a className="buglance-logo" title="Home page">
                      <span className="category-name">Blog</span>
                    </a>
                  </Link>
                </div>
                {openSearch ? (
                  <SearchInput
                    focus="true"
                    placeholder="Search"
                    value={searchTerm}
                    onClose={() => setOpenSearch(false)}
                    onChange={(term) => setSearchTerm(term)}
                    onSubmit={(e) => {
                      e.preventDefault();
                      setOpenSearch(false);
                      router.push(`/search/${searchTerm}`);
                    }}
                  />
                ) : (
                  <Fragment>
                    <div className="header-options">
                      <nav className="list-desktop">
                        <ul>
                          {categories.slice(0, 3).map(({ label, value, slug }, i) => (
                            <li key={value}>
                              <NavLink href={slug} setSelectedCategory={() => setSelectedCategory(categories[i])}>
                                <a title={label}>{label}</a>
                              </NavLink>
                            </li>
                          ))}
                          {categories.length > 3 && (
                            <li>
                              {/* <Dropdown
                                data={categories.slice(3)}
                                selected={selectedCategory}
                                onChange={(value) => {
                                  setSelectedCategory(value);
                                  router.push(value.value);
                                }}
                              /> */}
                              <Dropdown
                                //
                                data={categories.slice(3)}
                                selected={categories.slice(3).find((o) => o.slug === router.asPath)}
                                onChange={(value) => router.push(value.value)}
                              />

                              {/* <Menu list={} /> */}
                            </li>
                          )}
                        </ul>
                      </nav>
                      <nav className={`list-mobile ${openHamburger && 'opened'}`} style={{ height: hamburgerHeight - 51 + 'px' }}>
                        <ul>
                          {categories.map(({ label, value, slug }, i) => (
                            <li key={value}>
                              <NavLink href={slug} setSelectedCategory={() => setSelectedCategory(categories[i])}>
                                <a title={label}>{label}</a>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </nav>
                      <button className="search-button" onClick={() => setOpenSearch(true)}>
                        <Search />
                      </button>
                      <button className={`hamburger ${openHamburger && 'opened'}`} onClick={() => setOpenHamburger(!openHamburger)} aria-label="Mobile Navigation Menu Button">
                        <span className="line" />
                        <span className="line" />
                      </button>
                    </div>
                  </Fragment>
                )}
              </div>
            </div>
          </header>
        );
      }}
    </Consumer>
  );
};

export default HeaderBlog;
