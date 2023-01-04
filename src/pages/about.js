//  Context
import { Consumer } from 'pages/_app';
//  Global Components
import Layout from 'components/Layout';
import PageSummary from 'components/PageSummary';
import ProgressiveImage from 'components/ProgressiveImage';
//  Client
import { urlFor } from 'client';
//  SVG
import { Star, Heart, LinkedIn } from 'svg';

const Author = ({ name = '', position = '', link = '', className }) => {
  return (
    <div className={`author-info ${className}`}>
      <h2>
        {name}
        <a href={link} title={`LinkedIn profile of ${name}`} target="_blank" rel="noopener noreferrer">
          <LinkedIn />
        </a>
      </h2>
      <strong>{position}</strong>
      <span className="svg" />
    </div>
  );
};

const About = () => (
  <Consumer>
    {({ pagesContent: { about: aboutContent } }) => {
      const team_picture = urlFor(aboutContent.shapers.items[0].image.asset);
      return (
        <Layout title="About">
          <div className="about">
            <PageSummary title={aboutContent.hero.title} description={aboutContent.hero.description} illustration={<Star className="page-summary-illustration" aria-label="Star illustration" role="img" />} />
            <section className="management">
              <div className="container">
                <div className="management-wrapper">
                  <h1 className="section-title-secondary centered">Meet the minds behind our vision</h1>
                  {aboutContent.team.items.map(({ title, description, image, field1, field2, field3 }, i) => (
                    <figure className={`management-${field3}`} key={i}>
                      <div className="picture-wrapper">
                        <ProgressiveImage
                          alt={title}
                          desktop={[
                            { type: 'image/jpeg', srcSet: `${urlFor(image.asset)}?fm=jpg` },
                            { type: 'image/webp', srcSet: `${urlFor(image.asset)}?fm=webp` },
                          ]}
                          original_image={urlFor(image.asset)}
                        />
                        <Author className="mobile-author" name={title} position={field1} link={field2} />
                      </div>
                      <figcaption>
                        <Author className="desktop-author" name={title} position={field1} link={field2} />
                        <p>{description}</p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </section>
            <section className="team">
              <div className="container">
                <h1 className="section-title-secondary">{aboutContent.shapers.title}</h1>
                <ProgressiveImage
                  //
                  alt="Buglance team"
                  desktop={[
                    { type: 'image/jpeg', srcSet: `${team_picture}?fm=jpg` },
                    { type: 'image/webp', srcSet: `${team_picture}?fm=webp` },
                  ]}
                  original_image={`${team_picture}`}
                />
                <Heart className="heart-illustration" aria-label="Heart illustration" role="img" />
              </div>
            </section>
            <article className="address-contact-info">
              <div className="container">
                <div className="address-contact-info-wrapper">
                  <address>
                    <strong>{aboutContent.contacts.title}</strong>
                    <p>{aboutContent.contacts.description}</p>
                  </address>
                  <ul className="contact">
                    {aboutContent.contacts.items.map(({ title, description, field1 }, i) => (
                      <li key={i}>
                        <em>{title}</em>
                        <a href={field1} target="_blank" rel="noopener noreferrer">
                          {description}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </Layout>
      );
    }}
  </Consumer>
);

export default About;
