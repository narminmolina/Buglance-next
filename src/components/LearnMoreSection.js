import dynamic from 'next/dynamic';
//  Client
//  Utils
import { calendly_url } from 'utils';
//  Lazy Loads
const LinkButton = dynamic(() => import('components/LinkButton'));
const LearMoreSection = ({ title, dataColor = 'primary', placeholder, cta }) => {
  return (
    <section className="user-input-section learn-more">
      <div className="container">
        <h1 className="section-title-secondary">{title}</h1>
        <LinkButton rel target data-size="md" href={calendly_url} className="custom-link-button">
          Get in touch
        </LinkButton>
      </div>
    </section>
  );
};

export default LearMoreSection;
