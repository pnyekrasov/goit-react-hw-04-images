import axios from 'axios';

const API_KEY = '38184574-73f03994b4792e0e0e3ddcdab';
const PARAMETERS = 'image_type=photo&orientation=horizontal&per_page=12';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchPhotos = async (query, page) => {
  const response = await axios.get(
    `?${PARAMETERS}&key=${API_KEY}&q=${query}&page=${page}`
  );
  return response.data;
};
