import { useState } from 'react';
import dynamic from 'next/dynamic';
//  Client
import { apiPost } from 'client';
//  Utils
import { mailer_url, regex_patterns } from 'utils';
//  Lazy Loads
const Button = dynamic(() => import('components/Button'));
const ReactModal = dynamic(() => import('components/ReactModal'));
const ProgressiveImage = dynamic(() => import('components/ProgressiveImage'));

const Ebook = ({ link, title, poster, buttonLabel }) => {
  // Hooks
  const [state, setState] = useState(false);
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    company: '',
    role: '',
    link: link,
    action: 'ebook',
  });
  // Constants
  const buttonDisabledState = !(form.full_name.trim() !== '' && form.email.trim() !== '' && form.company.trim() !== '' && form.role.trim() !== '');
  // Methods
  const toggleModal = (e) => {
    e.preventDefault();
    setState(!state);
  };
  const sendEmail = () => apiPost(mailer_url, { ...form, title: 'New Buglance ebook request' });
  const handleChange = (field, value) => setForm((prevState) => ({ ...prevState, [field]: value }));

  return (
    <article className="ebook-section">
      <div className="container">
        <div className="ebook-section-wrapper">
          <div className="ebook-poster">
            <ProgressiveImage
              //
              alt={title}
              // width=""
              // height=""
              original_image={poster}
              desktop={[
                { type: 'image/jpeg', srcSet: `${poster}?fm=jpg` },
                { type: 'image/webp', srcSet: `${poster}?fm=webp` },
              ]}
            />
          </div>
          <div className="ebook-content">
            <h1 className="section-title-secondary">{title}</h1>
            <Button style-type="primary" data-size="md" onClick={toggleModal}>
              {buttonLabel ? buttonLabel : 'Download ebook'}
            </Button>
          </div>
        </div>
      </div>
      <ReactModal
        id="ebook-modal"
        cta="Download"
        state={state}
        formState={form}
        ctaOnClick={sendEmail}
        toggleModal={toggleModal}
        handleChange={handleChange}
        fields={[
          { id: 'ebook_full_name', name: 'full_name', type: 'text', label: 'Full name *', placeholder: 'Full name', required: true, pattern: regex_patterns.full_name, value: form.full_name },
          { id: 'ebook_email', name: 'email', type: 'email', label: 'Email *', placeholder: 'Email', required: true, pattern: regex_patterns.email, value: form.email },
          { id: 'ebook_company', name: 'company', type: 'text', label: 'Company *', placeholder: 'Company', required: true, value: form.company },
          { id: 'ebook_role', name: 'role', type: 'text', label: 'Role *', placeholder: 'Role', required: true, pattern: form.role, value: form.role },
        ]}
        buttonDisabledState={buttonDisabledState}
        title="Help us with more info to download your ebook"
      />
    </article>
  );
};

export default Ebook;
