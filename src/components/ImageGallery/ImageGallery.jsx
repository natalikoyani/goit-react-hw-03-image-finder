import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { StyledGallery } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <StyledGallery>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </StyledGallery>
  );
};
