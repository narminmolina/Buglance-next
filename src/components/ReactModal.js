import Modal from 'react-modal';
import { useState } from 'react';
import dynamic from 'next/dynamic';
//  Global Components
import Input from 'components/Input';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
//  Utils
import { calendly_url, GAEvent } from 'utils';
//  SVG
import { ModalClose, ModalSuccess } from 'svg';
//  Lazy Loads
const LinkButton = dynamic(() => import('components/LinkButton'));

Modal.setAppElement('#__next');

const ReactModal = ({ id, state, toggleModal, fields = [], title, status: prop_status, cta, buttonDisabledState, ctaOnClick, formState, setFormState, initialFormState, handleChange, ...props }) => {
  const [status, setStatus] = useState(prop_status);

  const returnTitle = (id) => {
    switch (id) {
      case 'main-my-report-modal':
        return 'Your issue report is on its way. In the meantime, let’s have a catchup.';
      case 'get-my-report-modal':
        return 'Your issue report is on its way. In the meantime, let’s have a catchup.';
      case 'ebook-modal':
        return 'Please, check your email to download your ebook.';
      case 'subscribe-modal':
        return 'You have been successfully subscribed to Buglance updates!';
      default:
        return '';
    }
  };

  const handleModalClose = (e) => {
    if (status === 'success') {
      setStatus('');
      setFormState(initialFormState);
    }
    toggleModal(e);
  };

  return (
    <Modal isOpen={state} onRequestClose={handleModalClose} {...props}>
      <div className="modal-header">
        <h1>{status === 'success' ? returnTitle(id) : title}</h1>
        {status === 'success' && cta === 'Get My Report' && (
          <p>
            You will receive your issue or bug reports shortly. Let’s have a talk on your reports for full picture on the product quality.
            <br />
            <br />
            If you want to have another quality check on a different mobile app, please, refresh your page.
          </p>
        )}
        <button onClick={handleModalClose} title="Modal Close Button">
          <ModalClose role="img" aria-label="Modal Close Icon" />
        </button>
      </div>
      <div className={`modal-body ${status === 'success' && 'success-body'}`}>
        {status === 'success' ? (
          <div className="modal-success-wrapper">{cta !== 'Get My Report' && <ModalSuccess />}</div>
        ) : (
          <form
            id={id}
            className="modal-body-form"
            onSubmit={(e) => {
              e.preventDefault();
              ctaOnClick();
              if (cta === 'Schedule') {
                window.open(calendly_url, '_blank').focus();
                setStatus('');
                setFormState(initialFormState);
                toggleModal(e);
              } else {
                setStatus('success');
              }
            }}
          >
            {fields.map((field, i) =>
              field.type === 'checkbox' ? (
                <Checkbox key={i} value={field.value} onChange={({ target: { checked } }) => handleChange('checkbox', checked)} {...field} />
              ) : (
                <Input key={i} value={field.value} onChange={({ target: { value } }) => handleChange(field.name, value)} {...field} />
              )
            )}
          </form>
        )}
      </div>
      <div className="modal-footer">
        {status === 'success' ? (
          cta === 'Get My Report' ? (
            <LinkButton
              rel
              target
              block="block"
              data-size="md"
              href={calendly_url}
              onClick={() => {
                GAEvent({
                  action: 'click',
                  params: {
                    event_category: 'Demo',
                    event_label: 'Schedule a Call',
                    value: 'Modal Schedule a Call button',
                  },
                });
              }}
              style-type="primary"
            >
              Schedule a Call
            </LinkButton>
          ) : (
            <Button style-type="default" block="" onClick={toggleModal}>
              Okay
            </Button>
          )
        ) : (
          <Button
            form={id}
            type="submit"
            style-type="default"
            block=""
            disabled={buttonDisabledState}
            onClick={() => {
              GAEvent({
                action: 'click',
                params: {
                  event_category: 'Demo',
                  event_label: cta,
                  value: `Modal ${cta} button`,
                },
              });
            }}
          >
            {cta}
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default ReactModal;
