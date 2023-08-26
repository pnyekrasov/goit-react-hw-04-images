import { useState } from 'react';
import { GalleryPhoto } from './ImageGalleryItem.styled';
import { ModalWindow } from 'components/Modal/Modal';

export const ImageGalleryItem = ({
  item: { largeImageURL, webformatURL, tags },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <GalleryPhoto
        src={webformatURL}
        alt={tags}
        onClick={() => setIsModalOpen(true)}
      />
      <ModalWindow isOpen={isModalOpen} isClose={() => setIsModalOpen(false)}>
        <img src={largeImageURL} alt={tags} />
      </ModalWindow>
    </>
  );
};
