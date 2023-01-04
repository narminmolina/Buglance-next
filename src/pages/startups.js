import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Consumer } from 'pages/_app';
//  Global Components
import Layout from 'components/Layout';
import Input from 'components/Input';
import Select from 'components/Select';
import Button from 'components/Button';
import InfoModal from 'components/InfoModal';
import SubPageSummary from 'components/SubPageSummary';
//  Client
import { apiPost, urlFor, getSolutions } from 'client';
//  Mocks
import { referral_partners, founding_year } from 'mocks';
import { mailer_url_startups } from 'utils';
//  Lazy Loads
const CTABlock = dynamic(() => import('components/CTABlock'));

const form_inputs = [
  { label: 'Full name', type: 'text', placeholder: 'Your name and surname here', name: 'full_name' },
  { label: 'Business email', type: 'email', placeholder: 'Your work email address', name: 'email' },
  { label: 'Company name', type: 'text', placeholder: 'Your company name', name: 'company' },
  { label: 'Company website', type: 'text', placeholder: 'example.com', name: 'website' },
];

let initialState = {
  full_name: '',
  email: '',
  company: '',
  website: '',
  founding_year: null,
  referral_name: null,
};

const Startups = () => {
  //* Hooks
  const [form, setForm] = useState(initialState);
  const [state, setState] = useState({ isOpen: false, status: '' });
  //* Methods
  const toggleModal = () => setState((prevState) => ({ ...prevState, isOpen: !prevState.isOpen }));
  const handleChange = ({ target }) => setForm((prevState) => ({ ...prevState, [target.name]: target.value }));
  const formSubmit = async (e) => {
    e.preventDefault();
    const response = await apiPost(mailer_url_startups, { ...form, founding_year: parseInt(form.founding_year), referral_name: form.referral_name?.value, title: `New subscription to Buglance newsletter` });
    if (response.status === 200) {
      setState({ isOpen: true, status: response.status });
      setForm(initialState);
    }
  };

  //* Constants
  const buttonDisabledState = !(form.full_name.trim() !== '' && form.email.trim() !== '' && form.company.trim() !== '' && form.website.trim() !== '');

  return (
    <Consumer>
      {({ pagesContent: { startups: startupsContent } }) => {
        return (
          <Layout title="Startups">
            <div className="startups">
              <SubPageSummary title={startupsContent.hero.title} buttonLink="#apply-buglance-form" description={startupsContent.hero.description} illustration="/img/easter-egg.svg" buttonCTA="Apply Now" />
              <section className="testing-process">
                <div className="container">
                  <div className="heading-container">
                    <h1 className="section-title-secondary centered">{startupsContent.testing_process.title} </h1>
                  </div>
                  <div className="testing-process-items">
                    {startupsContent.testing_process.items.map((item) => (
                      <figure className="testing-process-item" key={item.title}>
                        <img src={urlFor(item.image.asset)} alt={item.title} loading="lazy" />
                        <figcaption>
                          <h2>{item.title}</h2>
                          <p>{item.description}</p>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </section>
              <section className="apply-buglance" id="apply-buglance-form">
                <div className="container">
                  <div className="apply-buglance-items">
                    <div className="apply-buglance-item">
                      <h1>
                        {/* {startupsContent.what_you_get.title} <strong>{startupsContent.what_you_get.field1}</strong> */}
                        Get <strong>50% OFF</strong> on annual <br />
                        plan!
                      </h1>
                      <h3>{startupsContent.what_you_get.description}</h3>
                      <ul className="check-list green-check">
                        {startupsContent.what_you_get.items.map((item) => (
                          <li key={item.title}>{item.title}</li>
                        ))}
                      </ul>
                      <h3>{startupsContent.eligibility_details.title}</h3>
                      <ul className="check-list black-check">
                        {startupsContent.eligibility_details.items.map((item) => (
                          <li key={item.title}>{item.title}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="apply-buglance-item">
                      <div className="form-cart">
                        <h2>{startupsContent.apply_form.title}</h2>
                        <form onSubmit={formSubmit}>
                          {form_inputs.map((item, i) => (
                            <Input key={i} label={item.label} type={item.type} placeholder={item.placeholder} name={item.name} onChange={handleChange} value={form[item.name]} />
                          ))}
                          <Select
                            isClearable
                            name="founding_year"
                            id="founding_year_name-select"
                            options={founding_year}
                            value={form.founding_year}
                            label="Founding year (optional)"
                            placeholder="Year your company was found"
                            onChange={(value) => {
                              if (value) {
                                setForm((prevState) => ({ ...prevState, founding_year: value }));
                              } else {
                                setForm((prevState) => ({ ...prevState, founding_year: null }));
                              }
                            }}
                          />
                          <Select
                            isClearable
                            name="referral_name"
                            id="referral-referral_name-select"
                            options={referral_partners}
                            value={form.referral_name}
                            label="Referral partner (optional)"
                            placeholder="Select referral partner"
                            onChange={(value) => {
                              if (value) {
                                setForm((prevState) => ({ ...prevState, referral_name: value }));
                              } else {
                                setForm((prevState) => ({ ...prevState, referral_name: null }));
                              }
                            }}
                          />
                          <Button className="custom-button" type="submit" style-type="default" block disabled={buttonDisabledState}>
                            Apply now
                          </Button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="learn-more">
                <CTABlock widgetType="learnmore" title={startupsContent.learn_more.title} label={startupsContent.learn_more.field1} />
                <InfoModal id="startup-forms" state={state} toggleModal={toggleModal} />
              </section>
            </div>
          </Layout>
        );
      }}
    </Consumer>
  );
};

export async function getServerSideProps() {
  const capability_solutions = await getSolutions({ type: 'capability', tags: ['Platform page'] });
  return { props: { capability_solutions: capability_solutions } };
}

export default Startups;
