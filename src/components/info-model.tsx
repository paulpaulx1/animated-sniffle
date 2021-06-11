import Modal from 'react-modal';
import { useState } from 'react';
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

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(!modalIsOpen);
        }}
      >
        ?
      </button>
      {modalIsOpen ? (
        <Modal isOpen={false} style={customStyles}>
          <div>
            WELCOME! Please use show() function to see your code in the preview
            window. paulmneenan@gmail.com for bugs
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default InfoModal;
