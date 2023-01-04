import LinkButton from 'components/LinkButton';

const RequestDemoSection = ({ title, buttonLabel, link }) => {
  return (
    <article className="schedule-a-call">
      <div className="container">
        <div className="schedule-a-call-wrapper">
          <h1 className="section-title-secondary">{title}</h1>
          <LinkButton rel target data-size="md" href={link} style-type="secondary">
            {buttonLabel}
          </LinkButton>
        </div>
      </div>
    </article>
  );
};

export default RequestDemoSection;
