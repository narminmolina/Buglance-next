import { useState } from 'react';
import dynamic from 'next/dynamic';
//  Global Components
//  Utils
import { calendly_url, GAEvent } from 'utils';
//  SVG
import { ModalClose } from 'svg';
import Modal from 'react-modal';
//  Lazy Loads
const LinkButton = dynamic(() => import('components/LinkButton'));

Modal.setAppElement('#__next');
const InfoModal = ({ id, state, toggleModal, fields = [], title, status: prop_status, cta, buttonDisabledState, ctaOnClick, formState, handleChange, ...props }) => {
  const [status, setStatus] = useState(prop_status);

  const returnTitle = (id) => {
    switch (id) {
      case 'get-my-report-modal':
        return 'Your issue report is on its way. In the meantime, let’s have a catchup.';
      case 'startup-forms':
        return 'Your issue report is on its way. In the meantime, let’s have a catchup.';
      case 'ebook-modal':
        return 'Please, check your email to download your ebook.';
      case 'subscribe-modal':
        return 'You have been successfully subscribed to Buglance updates!';
      default:
        return '';
    }
  };
  return (
    <Modal isOpen={state.isOpen} onRequestClose={toggleModal} {...props}>
      <div className="modal-header">
        <h1>{returnTitle(id)}</h1>
        <button onClick={toggleModal} title="Modal Close Button">
          <ModalClose role="img" aria-label="Modal Close Icon" />
        </button>
      </div>
      <div className={`modal-body`}>
        {/*<div className='modal-success-wrapper'>{cta !== 'Get My Report' && <ModalSuccess />}</div>*/}
        {state.status === 200 ? (
          <p>
            You will receive your issue or bug reports shortly. Let’s have a talk on your reports for full picture on the product quality.
            <br />
            <br />
            If you want to have another quality check on a different mobile app, please, refresh your page.
          </p>
        ) : (
          'Error'
        )}
      </div>
      <div className="modal-footer">
        <LinkButton
          //
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
                value: 'Info Modal Schedule a Call button',
              },
            });
          }}
          style-type="primary"
        >
          Schedule a Call
        </LinkButton>
      </div>
    </Modal>
  );
};

export default InfoModal;
