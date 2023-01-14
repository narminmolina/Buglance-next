import Link from 'next/link';
//  Mocks
import { footer_pages, footer_socials } from 'mocks';
import { Consumer } from 'pages/_app';
//  SVG
import { TechStarsLogo, Five00StartupsLogo } from 'svg';

const Footer = () => {
  return (
    <Consumer>
      {({ pagesContent }) => {
        const footerContent = pagesContent.footer;

        return (
          <footer className="footer">
            <div className="container">
              <div className="footer-wrapper">
                <div className="copyright-and-partners">
                  <small className="copyright">{footerContent.left.title}</small>
                  <div className="partners">
                    <a className="partner-link" href="https://500.co/" target="_blank" rel="noopener noreferrer" title="Link to 500 Startups">
                      <Five00StartupsLogo />
                    </a>
                    <a className="partner-link" href="https://www.techstars.com/" target="_blank" rel="noopener noreferrer" title="Link to Tech Stars">
                      <TechStarsLogo />
                    </a>
                  </div>
                </div>
                <nav>
                  <ul className="internal–links">
                    {footerContent.links.items.map(({ title, description }) => (
                      <li key={description}>
                        <Link href={description} passHref>
                          <a title={title}>{title}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="socials">
                    {footerContent.socials.items.map(({ title, description }) => (
                      <li key={title}>
                        <a href={description} target="_blank" rel="noopener noreferrer" title={title}>
                          <span className={`social-icon ${title.toLowerCase()}`} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </footer>
        );
      }}
    </Consumer>
  );
};

export default Footer;
