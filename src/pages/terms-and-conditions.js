import BlockContent from '@sanity/block-content-to-react';
//  Global Components
import Layout from 'components/Layout';
//  Client
import { getPageData, blockContentSerializers } from 'client';

const TermsAndConditions = ({ title, content }) => (
  <Layout title={title}>
    <div className="container">
      <div className="terms-and-conditions">
        <h1>{title}</h1>
        <BlockContent blocks={content} dataset="production" serializers={blockContentSerializers} projectId={process.env.SANITY_PROJECT_ID} />
      </div>
    </div>
  </Layout>
);

export async function getServerSideProps() {
  const [page_data] = await getPageData({ slug: 'terms-and-conditions' });
  return { props: { title: page_data.title, content: page_data.body } };
}

export default TermsAndConditions;
