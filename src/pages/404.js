import { useState } from 'react';
import dynamic from 'next/dynamic';
//  Context
import { Consumer } from 'pages/_app';
//  Global Components
import Layout from 'components/Layout';
//  SVG
import { Cat } from 'svg';
//  Lazy Loads
const CTABlock = dynamic(() => import('components/CTABlock'));

const Error404 = () => {
  // Hooks
  const [appLink, setAppLink] = useState('');
  const [state, setState] = useState(false);
  // Methods
  const toggleModal = (e) => {
    e.preventDefault();
    setState(!state);
  };

  return (
    <Consumer>
      {({ pagesContent: { error: errorContent } }) => (
        <Layout title="404">
          <section className="error-404">
            <div className="container">
              <h1 className="section-title-main">There's nothing in the room except for a cat...</h1>
              <Cat role="img" aria-label="Cat" />
            </div>
          </section>
          <CTABlock state={state} toggleModal={toggleModal} outsideInputValue={appLink} {...errorContent.cta} />
        </Layout>
      )}
    </Consumer>
  );
};

export default Error404;
