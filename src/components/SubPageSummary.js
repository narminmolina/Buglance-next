//  Global Components
import LinkButton from 'components/LinkButton';
//  Mocks
import { GAEvent } from 'utils';

const SubPageSummary = ({ title, description, illustration, buttonCTA, buttonLink }) => {
  return (
    <section className="sub-page-summary">
      <div className="container">
        <div className="sub-page-summary-wrapper">
          <div className="sub-page-summary-text">
            <h1 className="section-title-main">{title}</h1>
            <p>{description}</p>
            <LinkButton
              data-size="md"
              href={buttonLink}
              onClick={() => {
                GAEvent({
                  action: 'click',
                  params: {
                    event_category: 'Demo',
                    event_label: 'Request demo',
                    value: 'Sub Page Summary Request demo button',
                  },
                });
              }}
              style-type="default"
              target="_blank"
              rel="noopener noreferrer"
            >
              {buttonCTA}
            </LinkButton>
          </div>
          <img className="sub-page-summary-illustration" src={illustration} alt={title} width="351px" height="282px" />
        </div>
      </div>
    </section>
  );
};

export default SubPageSummary;
