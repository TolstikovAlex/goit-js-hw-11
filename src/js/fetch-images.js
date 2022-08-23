import axios from 'axios';
export { fetchImages };

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '29456393-2561024fc54f9e3721e87791e';

async function fetchImages(query, page, perPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response;
}
