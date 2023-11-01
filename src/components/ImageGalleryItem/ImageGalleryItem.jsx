import { Component } from 'react';
import { StyledGalleryItem } from './ImageGalleryItem.styled';
import { StyledGalleryImage } from './ImageGalleryItem.styled';
import { ModalComponent } from '../ModalComponent';

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
        <ModalComponent
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          image={image}
        />
      </StyledGalleryItem>
    );
  }
}
