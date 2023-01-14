import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
//  Context
import { Consumer } from 'pages/_app';
//  Global Components
import Menu from 'components/Menu';
import NavLink from 'components/NavLink';
//  Mocks
import { header_pages } from 'mocks';
//  Client
import { apiPost } from 'client';
//  Utils
import { GAEvent, mailer_url, regex_patterns } from 'utils';
//  SVG
import { BuglanceLogoHorizontal, BuglanceLogoIcon } from 'svg';
//  Lazy Loads
const Button = dynamic(() => import('components/Button'));
const ReactModal = dynamic(() => import('components/ReactModal'));

const initialFormState = {
  full_name: '',
  email: '',
  company: '',
  phone: '',
};

const Header = () => {
  // Hooks
  const [modalState, setModalState] = useState(false);
  const [modalForm, setModalForm] = useState(initialFormState);
  const [hamburgerHeight, setHamburgerHeight] = useState(0);
  const [openHamburger, setOpenHamburger] = useState(false);

  useEffect(() => {
    setHamburgerHeight(document.documentElement.clientHeight);
  }, []);

  useEffect(() => {
    if (openHamburger) document.body.classList.add('body-hidden');
    if (!openHamburger) document.body.classList.remove('body-hidden');
  }, [openHamburger]);

  const serializeSolutions = (solutions, type) =>
    solutions
      .filter(({ _type, slug }) => _type === `${type}-solution` && slug)
      .map(({ title, slug }) => ({
        label: title,
        value: `/solutions/${type}/${slug}`,
      }));

  // Methods
  const toggleModal = () => setModalState(!modalState);

  const handleChange = (field, value) => setModalForm((prevState) => ({ ...prevState, [field]: value }));
  const sendEmail = () => apiPost(mailer_url, { ...modalForm, title: 'New "Get demo" Request' });

  // Constants
  const modalFields = [
    { name: 'full_name', type: 'text', label: 'Full name *', placeholder: 'Full name', required: true, pattern: regex_patterns.full_name, value: modalForm.full_name },
    { name: 'email', type: 'email', label: 'Email *', placeholder: 'Email', required: true, pattern: regex_patterns.email, value: modalForm.email },
    { name: 'company', type: 'text', label: 'Company *', placeholder: 'Company', required: true, value: modalForm.company },
    { name: 'phone', type: 'text', label: 'Phone *', placeholder: 'Phone', required: true },
  ];

  const buttonDisabledState = !(modalForm.full_name.trim() !== '' && modalForm.email.trim() !== '' && modalForm.company.trim() !== '' && modalForm.phone.trim() !== '');

  return (
    <Consumer>
      {({ solution_links }) => {
        const industry_solutions = serializeSolutions(solution_links, 'industry');
        const capability_solutions = serializeSolutions(solution_links, 'capability');

        const menu_list = [
          ...(industry_solutions.length !== 0
            ? [
                {
                  label: 'By industry',
                  value: '',
                  sub: { active: true, list: industry_solutions },
                },
              ]
            : []),
          ...(capability_solutions.length !== 0
            ? [
                {
                  label: 'By capability',
                  value: '',
                  sub: { active: true, list: capability_solutions },
                },
              ]
            : []),
        ];

        return (
          <header className="header">
            <div className="container">
              <div className="header-wrapper">
                <div className="logo-wrapper">
                  <Link href="/" passHref>
                    <a className="buglance-logo" title="Home page">
                      <BuglanceLogoHorizontal role="img" aria-label="Buglance Logo" />
                    </a>
                  </Link>
                </div>
                <div className="logo-wrapper mobile-logo">
                  <Link href="/" passHref>
                    <a className="buglance-logo" title="Home page">
                      <BuglanceLogoIcon role="img" aria-label="Buglance Logo" />
                    </a>
                  </Link>
                </div>
                <div className="header-options">
                  <nav className="list-desktop">
                    <ul className="list-desktop-list">
                      {header_pages.map(({ label, slug }) => (
                        <li className="list-desktop-list-item" key={slug}>
                          <NavLink href={slug}>
                            <a title={label}>{label}</a>
                          </NavLink>
                        </li>
                      ))}
                      {menu_list.length !== 0 && (
                        <li className="list-desktop-list-item">
                          <Menu list={menu_list} buttonLabel="Solutions" />
                        </li>
                      )}
                      <li className="list-desktop-list-item">
                        <a href="https://nest.buglance.com" target="_blank" rel="noopener noreferrer" title="Log in">
                          Log in
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <nav className={`list-mobile ${openHamburger && 'opened'}`} style={{ height: hamburgerHeight - 51 + 'px' }}>
                    <ul>
                      {header_pages.map(({ label, slug }) => (
                        <li key={slug}>
                          <Link href={slug} passHref>
                            <a title={label}>{label}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <Button
                    data-size="md"
                    style-type="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      GAEvent({
                        action: 'click',
                        params: {
                          event_category: 'Demo',
                          event_label: 'Get demo',
                          value: 'Header Get demo',
                        },
                      });
                      toggleModal();
                    }}
                  >
                    Get demo
                  </Button>
                  <ReactModal
                    id="header-get-demo-modal"
                    cta="Schedule"
                    state={modalState}
                    ctaOnClick={sendEmail}
                    fields={modalFields}
                    formState={modalForm}
                    setFormState={setModalForm}
                    handleChange={handleChange}
                    toggleModal={toggleModal}
                    initialFormState={initialFormState}
                    buttonDisabledState={buttonDisabledState}
                    title="Schedule demo"
                  />
                  <button className={`hamburger ${openHamburger && 'opened'}`} onClick={() => setOpenHamburger(!openHamburger)} aria-label="Mobile Navigation Menu Button">
                    <span className="line" />
                    <span className="line" />
                  </button>
                </div>
              </div>
            </div>
          </header>
        );
      }}
    </Consumer>
  );
};

export default Header;
