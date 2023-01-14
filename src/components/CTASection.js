import dynamic from 'next/dynamic';
//  Utils
import { calendly_url } from 'utils';
//  Lazy Loading
const LinkButton = dynamic(() => import('components/LinkButton'));

const CTASection = ({ img = '/img/placeholder.jpg', title, buttonLabel }) => {
  return (
    <div className="container">
      <article className="cta-section" style={{ backgroundImage: `url(${img})` }}>
        <div className="cta-section-wrapper">
          {title && <h1 className="section-title-secondary">{title}</h1>}
          {buttonLabel && (
            <LinkButton rel target data-size="md" href={calendly_url} style-type="primary">
              {buttonLabel}
            </LinkButton>
          )}
        </div>
      </article>
    </div>
  );
};

export default CTASection;
