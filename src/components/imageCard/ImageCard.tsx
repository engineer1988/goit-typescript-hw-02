import css from './ImageCard.module.css';
import { FC } from 'react';

interface ImageCartProps {
  smallUrl: string;
  alt: string;
  clickPhoto: (regularUrl: string) => void;
  regularUrl: string;
}

const ImageCart: FC<ImageCartProps> = ({
  smallUrl,
  alt,
  clickPhoto,
  regularUrl,
}) => {
  return (
    <>
      <div>
        <img
          onClick={() => {
            clickPhoto(regularUrl);
          }}
          className={css.image_gallery_img}
          src={smallUrl}
          alt={alt}
        />
      </div>
    </>
  );
};
export default ImageCart;
