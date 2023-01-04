import Typed from 'react-typed';
import { useState } from 'react';
import dynamic from 'next/dynamic';
//  Context
import { Consumer } from 'pages/_app';
//  Global Components
import Layout from 'components/Layout';
//  Client
import { apiPost, getPosts, getSolutions } from 'client';
//  Utils
import { GAEvent, mailer_url, regex_patterns } from 'utils';
//  Mocks
import { apps, index_product_sections } from 'mocks';
//  Lazy Loads
const Cards = dynamic(() => import('components/Cards'));
const CTABlock = dynamic(() => import('components/CTABlock'));
const ReactModal = dynamic(() => import('components/ReactModal'));
const ProgressiveImage = dynamic(() => import('components/ProgressiveImage'));

const initialFormState = {
  full_name: '',
  email: '',
  company: '',
  phone: '',
  app_link: '',
};

const Home = ({ popular_reads, industry_solutions }) => {
  // Hooks
  const [mainModalState, setMainModalState] = useState(false);
  const [mainModalForm, setMainModalForm] = useState(initialFormState);
  const [externalModalState, setExternalModalState] = useState(false);
  const [outsideInputValue, setOutsideInputValue] = useState('');

  // Methods
  const toggleMainModal = (e) => setMainModalState(!mainModalState);
  const handleChange = (field, value) => setMainModalForm((prevState) => ({ ...prevState, [field]: value }));
  const sendEmail = () => apiPost(mailer_url, { ...mainModalForm, title: 'New "Test My App" Request' });

  // Constants
  const mainModalFields = [
    { name: 'full_name', type: 'text', label: 'Full name *', placeholder: 'Full name', required: true, pattern: regex_patterns.full_name, value: mainModalForm.full_name },
    { name: 'email', type: 'email', label: 'Email *', placeholder: 'Email', required: true, pattern: regex_patterns.email, value: mainModalForm.email },
    { name: 'company', type: 'text', label: 'Company *', placeholder: 'Company', required: true, value: mainModalForm.company },
    { name: 'phone', type: 'text', label: 'Phone *', placeholder: 'Phone', required: true },
  ];

  const buttonDisabledState = !(mainModalForm.full_name.trim() !== '' && mainModalForm.email.trim() !== '' && mainModalForm.company.trim() !== '' && mainModalForm.phone.trim() !== '' && mainModalForm.app_link.trim() !== '');

  return (
    <Consumer>
      {({ pagesContent: { homepage: homeContent } }) => (
        <Layout>
          <div className="home">
            <section className="main-hero">
              <div className="container">
                <div className="main-hero-wrapper">
                  <h1 className="section-title-main centered">
                    {homeContent.hero.title}&nbsp;
                    <Typed
                      //
                      loop
                      typeSpeed={80}
                      backSpeed={70}
                      backDelay={460}
                      startDelay={260}
                      strings={homeContent.hero.items.map((i) => i.title)}
                    />
                  </h1>
                  <p className="section-description">{homeContent.hero.description}</p>
                  <div className="input-button-hybrid" data-color="default">
                    <form
                      id="main-test-my-app"
                      onSubmit={(e) => {
                        e.preventDefault();
                        toggleMainModal();
                        GAEvent({
                          action: 'click',
                          params: {
                            event_category: 'Demo',
                            event_label: 'Test my app',
                            value: 'Home Page Test my app button',
                          },
                        });
                      }}
                    >
                      <input
                        //
                        required
                        autoComplete="url"
                        type="text"
                        id="app_link"
                        value={mainModalForm.app_link}
                        name="app_link"
                        aria-label={homeContent.hero_cta.description}
                        placeholder={homeContent.hero_cta.description}
                        onChange={({ target: { value } }) => setMainModalForm((prevState) => ({ ...prevState, app_link: value }))}
                      />
                      <button type="submit">{homeContent.hero_cta.title}</button>
                    </form>
                    <ReactModal
                      id="main-my-report-modal"
                      cta="Get My Report"
                      state={mainModalState}
                      ctaOnClick={sendEmail}
                      fields={mainModalFields}
                      formState={mainModalForm}
                      setFormState={setMainModalForm}
                      handleChange={handleChange}
                      toggleModal={toggleMainModal}
                      initialFormState={initialFormState}
                      buttonDisabledState={buttonDisabledState}
                      title="Help us with more info to send your app reports"
                    />
                  </div>
                  <div className="main-hero-statistics">
                    {homeContent.hero_cta.items.map(({ title, description }) => (
                      <div className="statistics-item" key={title}>
                        <h2 className="statistics-item-number">{description}</h2>
                        <p className="statistics-item-label">{title}</p>
                      </div>
                    ))}
                  </div>
                  <div className="svg-elements star" />
                  <div className="svg-elements heart" />
                  <div className="svg-elements arrow" />
                </div>
              </div>
            </section>
            <article className="product">
              <div className="container">
                <h1 className="section-title-secondary">{homeContent.sections.title}</h1>
                {homeContent.sections.items.map(({ title, description, key }) => (
                  <div className={`product-section-block ${key}`} key={key}>
                    <div className="text-content">
                      <h2>{title}</h2>
                      <div dangerouslySetInnerHTML={{ __html: description }}></div>
                    </div>
                    <div className="visual-content">
                      <ProgressiveImage
                        //
                        alt={title}
                        width={index_product_sections[key].width}
                        height={index_product_sections[key].height}
                        original_image={`/img/product/desktop/${key}.png`}
                        mobile={[
                          { type: 'image/png', srcSet: `/img/product/mobile/${key}.png` },
                          { type: 'image/webp', srcSet: `/img/product/mobile/${key}.webp` },
                        ]}
                        desktop={[
                          { type: 'image/png', srcSet: `/img/product/desktop/${key}.png` },
                          { type: 'image/webp', srcSet: `/img/product/desktop/${key}.webp` },
                        ]}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
            <section className="target-segments">
              <div className="container">
                <h1 className="section-title-secondary">{homeContent.solutions.title}</h1>
                <Cards type="solution" cards={industry_solutions} />
              </div>
            </section>
            <section className="mobile-apps-we-tested">
              <div className="outer-apps">
                <h1 className="section-title-main centered">{homeContent.apps.title}</h1>
                <ul className="circle-container outer">
                  {apps.slice(0, 15).map(({ img, title }) => (
                    <li key={title}>
                      <ProgressiveImage
                        //
                        alt={title}
                        width="136px"
                        height="136px"
                        original_image={`/img/apps/jpg/${img}.jpg`}
                        desktop={[
                          { type: 'image/jpeg', srcSet: `/img/apps/jpg/${img}.jpg` },
                          { type: 'image/webp', srcSet: `/img/apps/webp/${img}.webp` },
                        ]}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="inner-apps">
                <ul className="circle-container inner">
                  {apps.slice(15, 30).map(({ img, title }) => (
                    <li key={title}>
                      <ProgressiveImage
                        //
                        alt={title}
                        width="90px"
                        height="90px"
                        original_image={`/img/apps/jpg/${img}.jpg`}
                        desktop={[
                          { type: 'image/jpeg', srcSet: `/img/apps/jpg/${img}.jpg` },
                          { type: 'image/webp', srcSet: `/img/apps/webp/${img}.webp` },
                        ]}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <section className="popular-reads">
              <div className="container">
                <h1 className="section-title-secondary">{homeContent.blog.title}</h1>
                <Cards type="blog" cards={popular_reads} />
              </div>
            </section>
            <CTABlock externalState={externalModalState} outsideInputValue={outsideInputValue} {...homeContent.cta} />
          </div>
        </Layout>
      )}
    </Consumer>
  );
};

export async function getServerSideProps() {
  const [industry_solutions, popular_reads] = await Promise.all([
    //
    getSolutions({ type: 'industry' }),
    getPosts({ isPopular: true, limit: 6, tags: ['landing'] }),
  ]);
  return { props: { popular_reads, industry_solutions } };
}

export default Home;
