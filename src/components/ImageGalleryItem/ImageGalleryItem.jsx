import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ images }) => {
  return images.map(image => {
    return (
      <li key={image.id} class="gallery-item">
        <img src={image.webformatURL} alt={image.tags} />
        <Modal />
      </li>
    );
  });
};
