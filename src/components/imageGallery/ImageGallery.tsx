// import ImageCard from '../imageCard/ImageCard';
// import css from './ImageGallery.module.css';
// import { FC } from 'react';

// interface ImageGalleryProps {
//   photos: {}[];
//   onClickPhoto: (arg: string) => void;
// }

// const ImageGallery: FC<ImageGalleryProps> = ({ photos, onClickPhoto }) => {
//   return (
//     <ul className={css.image_gallery}>
//       {photos.map(image => {
//         return (
//           <li key={image.id} className={css.image_gallery_item}>
//             <ImageCard
//               smallUrl={image.urls.small}
//               regularUrl={image.urls.regular}
//               alt={image.alt_description}
//               clickPhoto={onClickPhoto}
//             />
//           </li>
//         );
//       })}
//     </ul>
//   );
// };
// export default ImageGallery;
import ImageCard from '../imageCard/ImageCard';
import css from './ImageGallery.module.css';
import { FC } from 'react';
import { Image } from '../../types';

// interface Image {
//   id: string;
//   urls: {
//     small: string;
//     regular: string;
//   };
//   alt_description: string;
// }

interface ImageGalleryProps {
  photos: Image[];
  onClickPhoto: (arg: string) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ photos, onClickPhoto }) => {
  return (
    <ul className={css.image_gallery}>
      {photos.map((image: Image) => {
        return (
          <li key={image.id} className={css.image_gallery_item}>
            <ImageCard
              smallUrl={image.urls.small}
              regularUrl={image.urls.regular}
              alt={image.alt_description}
              clickPhoto={onClickPhoto}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
