import axios from 'axios'

export const fetchImages = (search = 'space', pageNumber = 1, apiKey = '1079263-00c80acf2cfa9c964ee9d84d8') => {
  return axios.get(`https://pixabay.com/api/?q=${search}&page=${pageNumber}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`)
}
export const somethingFunc = () => { };
