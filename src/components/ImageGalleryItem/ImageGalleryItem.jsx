import { Component } from 'react';
import Modal from 'react-modal';
import { StyledGalleryItem } from './ImageGalleryItem.styled';
import { StyledGalleryImage } from './ImageGalleryItem.styled';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 'calc(100vw - 48px)',
  },
};

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
    document.body.style.overflow = 'hidden';
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
    document.body.style.overflow = 'auto';
  };

  render() {
    const { isModalOpen } = this.state;
    const { image } = this.props;

    return (
      <StyledGalleryItem key={image.id} onClick={this.openModal}>
        <StyledGalleryImage src={image.webformatURL} alt={image.tags} />
        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
        >
          <img src={image.largeImageURL} alt={image.tags} />
        </Modal>
      </StyledGalleryItem>
    );
  }
}
