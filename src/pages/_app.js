import App from 'next/app';
import { createContext } from 'react';
import NextNprogress from 'nextjs-progressbar';
//  Client
import { getPagesContent, getCategories, preparePagesContent, getSolutionsLinks } from 'client';
//  Styles
import 'styles/main.scss';

//  Context
const AppContext = createContext();

const MyApp = ({ Component, pageProps, pagesContent, categories, solution_links }) => (
  <AppContext.Provider value={{ pagesContent, categories, solution_links }}>
    <Component {...pageProps} />
    <NextNprogress color="#000" startPosition={0.1} stopDelayMs={100} height={3} options={{ showSpinner: false }} />
  </AppContext.Provider>
);

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const categories = await getCategories({});
  const rawPagesContent = await getPagesContent();
  const solution_links = await getSolutionsLinks();
  const pagesContent = preparePagesContent(rawPagesContent);

  return { ...appProps, pagesContent, categories, solution_links };
};

export const Consumer = AppContext.Consumer;
// export const reportWebVitals = (metric) => console.log(metric, 'reportWebVitals');

export default MyApp;
