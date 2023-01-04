//  Global Components
import Layout from 'components/Layout';

const Error = ({ statusCode }) => (
  <Layout title="Error">
    <section className="error">
      <div className="container">
        <h1 className="section-title-main">{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</h1>
      </div>
    </section>
  </Layout>
);

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
