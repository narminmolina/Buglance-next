import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
//  Client
import { apiPost } from 'client';
//  Utils
import { regex_patterns, mailer_url, GAEvent } from 'utils';
//  Lazy Loads
const ReactModal = dynamic(() => import('components/ReactModal'));

const TestMyAppSection = ({ title, externalState = false, dataColor = 'primary', placeholder = 'Your mobile app URL', outsideInputValue, label = 'Test my app' }) => {
  //  Hooks
  const [state, setState] = useState(externalState);

  //INITIAL STATE
  const initialFormState = {
    full_name: '',
    email: '',
    company: '',
    phone: '',
    app_link: '',
  };

  const [form, setForm] = useState(initialFormState);
  // prettier-ignore
  useEffect(() => { setForm((prevState) => ({ ...prevState, app_link: outsideInputValue })) }, [outsideInputValue]);
  // prettier-ignore
  useEffect(() => { setState(externalState) }, [externalState]);
  // Constants
  const buttonDisabledState = !(form.full_name.trim() !== '' && form.email.trim() !== '' && form.company.trim() !== '' && form.phone.trim() !== '' && form.app_link.trim() !== '');
  // Methods
  const sendEmail = () => apiPost(mailer_url, { ...form, title: 'New "Test My App" Request' });
  const handleChange = (field, value) => setForm((prevState) => ({ ...prevState, [field]: value }));

  const toggleModal = () => setState(!state);

  return (
    <section className="user-input-section">
      <div className="container">
        <h1 className="section-title-secondary">{title}</h1>
        <div className="input-button-hybrid" data-color={dataColor}>
          <form
            id="test-my-app-section"
            onSubmit={(e) => {
              e.preventDefault();
              toggleModal();
              GAEvent({
                action: 'click',
                params: {
                  event_category: 'Demo',
                  event_label: 'Test my app',
                  value: 'Home Page bottom Test my app button',
                },
              });
            }}
          >
            <input
              //
              value={form.app_link}
              required
              type="text"
              autoComplete="url"
              aria-label={label}
              placeholder={placeholder}
              // pattern={regex_patterns.url}
              onChange={({ target: { value } }) => handleChange('app_link', value)}
            />
            <button type="submit">{label}</button>
          </form>
        </div>
      </div>
      <ReactModal
        id="get-my-report-modal"
        cta="Get My Report"
        state={state}
        formState={form}
        ctaOnClick={sendEmail}
        toggleModal={toggleModal}
        handleChange={handleChange}
        setFormState={setForm}
        initialFormState={initialFormState}
        buttonDisabledState={buttonDisabledState}
        title="Help us with more info to send your app reports"
        fields={[
          { type: 'text', name: 'full_name', label: 'Full name *', placeholder: 'Full name', required: true, pattern: regex_patterns.full_name },
          { type: 'email', name: 'email', label: 'Email *', placeholder: 'Email', required: true, pattern: regex_patterns.email },
          { type: 'text', name: 'company', label: 'Company *', placeholder: 'Company', required: true },
          { type: 'tel', name: 'phone', label: 'Phone *', placeholder: 'Phone', required: true },
        ]}
      />
    </section>
  );
};

export default TestMyAppSection;
