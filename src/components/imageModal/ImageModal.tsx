import Modal from 'react-modal';
import { FC } from 'react';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'transparent',
    border: 'none',
  },
};
Modal.setAppElement('#root');
interface ImageModalProps {
  isFoto: string;
  isOpen: boolean;
  onRequestClose: () => void;
}
const ImageModal: FC<ImageModalProps> = ({
  isFoto,
  isOpen,
  onRequestClose,
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <div>
        <img src={isFoto} />
      </div>
    </Modal>
  );
};
export default ImageModal;
