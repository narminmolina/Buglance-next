const PageSummary = ({ title, description, illustration }) => {
  return (
    <section className="page-summary">
      <div className="container">
        <div className="page-summary-wrapper">
          <div className="page-summary-text">
            <h1 className="section-title-main">{title}</h1>
            <p>{description}</p>
          </div>
          {illustration}
        </div>
      </div>
    </section>
  );
};

export default PageSummary;
