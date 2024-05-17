import axios, { AxiosResponse } from 'axios';

const fetchPhotosWithLoadMore = async <T>(
  query: string,
  page: number
): Promise<T> => {
  const params: URLSearchParams = new URLSearchParams({
    page: page.toString(),
    per_page: '12',
    orientation: 'landscape',
  });
  const CLIENT_ID: string = 'vTU9R-MFhNM4fikKYX1a6ZvUIFY4QHxnr17U16Q1t-M';
  const URL: string = `https://api.unsplash.com/search/photos?client_id=${CLIENT_ID}&query=${query}&${params}`;

  const response: AxiosResponse<T> = await axios.get<T>(URL);
  return response.data;
};

export { fetchPhotosWithLoadMore };
