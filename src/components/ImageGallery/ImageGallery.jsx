import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ListItem, StyledGallery } from './ImageGallery.styled';

export const ImageGallery = ({ items }) => {
  return (
    <StyledGallery>
      {items.map(item => (
        <ListItem key={item.id}>
          <ImageGalleryItem item={item} />
        </ListItem>
      ))}
    </StyledGallery>
  );
};
