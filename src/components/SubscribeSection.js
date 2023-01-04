import { useState } from 'react';
import dynamic from 'next/dynamic';
//  Client
import { apiPost } from 'client';
//  Utils
import { mailer_url, regex_patterns } from 'utils';
//  Lazy Loads
const ReactModal = dynamic(() => import('components/ReactModal'));

const SubscribeSection = ({ title, dataColor = 'primary', placeholder, cta }) => {
  const [state, setState] = useState(false);
  //INITIAL STATE
  const initialFormState = {
    full_name: '',
    email: '',
    company: '',
    app_link: '',
    checkbox: false,
  };

  const [form, setForm] = useState(initialFormState);
  // Constants
  const buttonDisabledState = !(form.full_name.trim() !== '' && form.email.trim() !== '' && form.company.trim() !== '' && form.checkbox);
  // Methods
  const sendEmail = () => apiPost(mailer_url, { ...form, title: `New subscription to Buglance newsletter` });
  const handleChange = (field, value) => setForm((prevState) => ({ ...prevState, [field]: value }));
  const toggleModal = (e) => {
    e.preventDefault();
    setState(!state);
  };
  return (
    <section className="user-input-section">
      <div className="container">
        <h1 className="section-title-secondary">{title}</h1>
        <div className="input-button-hybrid" data-color={dataColor}>
          <form id="subscribe-section" onSubmit={toggleModal}>
            <input
              //
              required
              type="email"
              value={form.email}
              id="subscribe-email"
              autoComplete="email"
              placeholder={placeholder}
              aria-label="Your email for subscription"
              onChange={({ target: { value } }) => handleChange('email', value)}
            />
            <button type="submit">{cta}</button>
          </form>
        </div>
      </div>
      <ReactModal
        id="subscribe-modal"
        cta="Subscribe"
        state={state}
        formState={form}
        ctaOnClick={sendEmail}
        toggleModal={toggleModal}
        handleChange={handleChange}
        setFormState={setForm}
        initialFormState={initialFormState}
        fields={[
          { id: 'subscribe_full_name', name: 'full_name', type: 'text', label: 'Full name *', placeholder: 'Full name', required: true, pattern: regex_patterns.full_name, value: form.full_name },
          { id: 'subscribe_email', name: 'email', type: 'email', label: 'Email *', placeholder: 'Email', required: true, pattern: regex_patterns.email, value: form.email },
          { id: 'subscribe_company', name: 'company', type: 'text', label: 'Company *', placeholder: 'Company', required: true, value: form.company },
          { id: 'subscribe_checkbox', name: 'checkbox', type: 'checkbox', label: 'I agree to Buglance', link: { title: 'Terms & Conditions', slug: '/terms-and-conditions' }, value: form.checkbox },
        ]}
        buttonDisabledState={buttonDisabledState}
        title="Get latest updates and special tips on software testing"
      />
    </section>
  );
};

export default SubscribeSection;
