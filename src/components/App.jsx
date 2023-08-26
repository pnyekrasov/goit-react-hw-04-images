import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchPhotos } from 'pixabay-api';
import { Container } from './App.styled';
import { Loader } from './Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';

const PER_PAGE = 12;
const notifySubmit = () =>
  toast.error('Enter the data in the field "Search images and photos", please');
const notifySearch = () =>
  toast.error(
    'Sorry, there are no images matching your search query. Please try again.'
  );

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(1);

  useEffect(() => {
    if (query === '') return;
    async function getPhotos() {
      try {
        setLoading(true);

        const index = query.indexOf('/') + 1;
        const currentQuery = query.slice(index);
        const currentpage = page;

        const { totalHits, hits } = await fetchPhotos(
          currentQuery,
          currentpage
        );

        if (totalHits === 0) {
          return notifySearch();
        }
        setTotal(totalHits);
        setImages(state => [...state, ...hits]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getPhotos();
  }, [query, page]);

  const hendleSubmit = newQuery => {
    if (!newQuery.trim()) {
      return notifySubmit();
    }
    setQuery(`${Date.now()}/${newQuery}`);
    setImages([]);
    setPage(1);
    setLoading(false);
    setTotal(1);
  };

  const handleLoadMore = () => {
    setPage(state => state + 1);
  };

  const limit = Math.ceil(total / PER_PAGE);

  return (
    <Container>
      <Searchbar onChange={hendleSubmit} />
      {images.length > 0 && <ImageGallery items={images} />}
      {loading && <Loader />}
      {images.length > 0 && page !== limit && (
        <Button onClick={handleLoadMore} />
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </Container>
  );
};
