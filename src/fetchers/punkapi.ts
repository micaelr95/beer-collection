import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.punkapi.com/v2/',
});

export const getPaginated = async (page = 1, perPage = 16) => {
  try {
    const res = await instance.get<Beer[]>(
      `beers?page=${page}&per_page=${perPage}`
    );
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
