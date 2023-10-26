import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { StyledGalleryItem } from './ImageGalleryItem.styled';
import { StyledGalleryImage } from './ImageGalleryItem.styled';

// export const ImageGalleryItem = ({ image }) => {
//   const instance = basicLightbox.create(`
//       <div class="modal">
//         <img src=${image.largeImageURL} alt=${image.tags} width="900px"/>
//       </div>
//   `);

//   return (
//     <li key={image.id} class="gallery-item" onClick={instance.show}>
//       <img src={image.webformatURL} alt={image.tags} />
//     </li>
//   );
// };

export const ImageGalleryItem = ({ image }) => {
  let instance = null;

  const openModal = () => {
    if (!instance) {
      instance = basicLightbox.create(`
        <div class="modal">
          <img src=${image.webformatURL} alt=${image.tags} width="900px"/>
        </div>
      `);
    }
    instance.show();
    window.addEventListener('keydown', closeModalOnEsc);
  };

  const closeModalOnEsc = evt => {
    if (evt.keyCode === 27) {
      instance.close();
      window.removeEventListener('keydown', closeModalOnEsc);
    }
  };

  return (
    <StyledGalleryItem key={image.id} onClick={openModal}>
      <StyledGalleryImage src={image.webformatURL} alt={image.tags} />
    </StyledGalleryItem>
  );
};
