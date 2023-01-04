import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
//  Global Components
import Select from 'components/Select';
import Layout from 'components/Layout';
import PageSummary from 'components/PageSummary';
// Context
import { Consumer } from 'pages/_app';
//  Mocks
import { countries, platform_page, platform_solutions } from 'mocks';
//  Utils
import { calendly_url, GAEvent } from 'utils';
//  Helpers
import { intToString } from 'helpers';
//  Client
import { getSolutions } from 'client';
//  SVG
import { Testers, RedLineMobile } from 'svg';
//  Lazy Loads
const Cards = dynamic(() => import('components/Cards'));
const LinkButton = dynamic(() => import('components/LinkButton'));
const ProgressiveImage = dynamic(() => import('components/ProgressiveImage'));

const Platform = ({ capability_solutions }) => {
  // Hooks
  const router = useRouter();
  const [defaultCountry, setDefaultCountry] = useState(countries[0]);
  useEffect(() => {
    const countryName = router.asPath.slice(27);
    const selectedCountry = countries.filter(({ slug }) => slug === countryName);
    if (selectedCountry.length) setDefaultCountry(selectedCountry[0]);
  }, []);

  return (
    <Consumer>
      {({ pagesContent: { platform: platformContent } }) => (
        <Layout title="Platform">
          <div className="platform">
            <PageSummary title={platformContent.hero.title} description={platformContent.hero.description} illustration={<Testers className="page-summary-illustration" aria-label="Platform illustration" role="img" />} />
            <section className="custom-solutions">
              <div className="container">
                <h1 className="section-title-secondary centered">{platformContent.section1.title}</h1>
                <div className="custom-solutions-wrapper">
                  {platform_solutions.map(({ illustration, title }, i) => (
                    <div key={i}>
                      {illustration}
                      <h2>{title}</h2>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <article className="product">
              <div className="container">
                <h1 className="section-title-secondary">Industry's easiest to use testing platform</h1>
                {platformContent.features.items.map(({ title, description, key }) => (
                  <div className={`product-section-block ${key}`} key={key}>
                    <div className="text-content">
                      <h2>{title}</h2>
                      <div dangerouslySetInnerHTML={{ __html: description }}></div>
                    </div>
                    <div className="visual-content">
                      <ProgressiveImage
                        //
                        alt={title}
                        width={platform_page.product_sections[key].width}
                        height={platform_page.product_sections[key].height}
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
            <article className="testing-solutions">
              <div className="container">
                <h1 className="section-title-secondary">{platformContent.solutions.title}</h1>
                <Cards type="solution" cards={capability_solutions} />
              </div>
            </article>
            <article className="active-testers-and-devices">
              <div className="container">
                <h1 className="section-title-secondary centered">
                  Check currently active testers <br /> {defaultCountry.slug === 'worldwide' ? 'worldwide' : `in ${defaultCountry.label}`}
                </h1>
                <div className="testers-select-wrapper">
                  <Select
                    //
                    id="country-select"
                    options={countries}
                    value={defaultCountry}
                    placeholder="Select country"
                    defaultValue={defaultCountry}
                    onChange={(value) => setDefaultCountry(value)}
                  />
                </div>
                <div className="active-testers-and-devices-wrapper">
                  <div className="stat-block">
                    <div className="stat-block-icon stat-block-icon-users" />
                    <h6>
                      <span>{intToString(defaultCountry.data.user_count)}</span>
                      <span> testers</span>
                    </h6>
                  </div>
                  <div className="stat-block">
                    <div className="stat-block-icon stat-block-icon-android" />
                    <h6>
                      <span>{intToString(defaultCountry.data.android_devices_count)}</span>
                      <span> devices</span>
                    </h6>
                  </div>
                  <div className="stat-block">
                    <div className="stat-block-icon stat-block-icon-apple" />
                    <h6>
                      <span>{intToString(defaultCountry.data.ios_devices_count)}</span>
                      <span> devices</span>
                    </h6>
                  </div>
                </div>
                <RedLineMobile className="active-testers-red-line" />
                <div className="stat-block-button-wrapper">
                  <LinkButton
                    rel
                    target
                    block="block"
                    data-size="md"
                    href={calendly_url}
                    onClick={() => {
                      GAEvent({
                        action: 'click',
                        params: {
                          event_category: 'Demo',
                          event_label: 'Request demo',
                          value: 'Platform page Request demo button',
                        },
                      });
                    }}
                    style-type="primary"
                  >
                    Request demo
                  </LinkButton>
                </div>
              </div>
            </article>
          </div>
        </Layout>
      )}
    </Consumer>
  );
};

export async function getServerSideProps() {
  const capability_solutions = await getSolutions({ type: 'capability', tags: ['Platform page'] });
  return { props: { capability_solutions: capability_solutions } };
}

export default Platform;
