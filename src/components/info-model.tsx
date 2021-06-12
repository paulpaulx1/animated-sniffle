import Modal from 'react-modal';
import { useState } from 'react';
import './info-modal.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const InfoModal: React.FC = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button className='button is-primary is-small ' onClick={openModal}>
        ?
      </button>
      {modalIsOpen ? (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel='Example Modal'
        >
          <div>
            WELCOME!
            <br />
            Please use show() function to see your code in the preview window.
            <br /> paulmneenan@gmail.com for bugs and/or job opportunities :-){' '}
            <br />
            <button
              className='button is-small is-primary'
              style={{ paddingLeft: '500' }}
              onClick={closeModal}
            >
              close
            </button>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default InfoModal;
