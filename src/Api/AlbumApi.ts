import axios from 'axios';

const baseAlbums = 'https://jsonplaceholder.typicode.com';
const basePhotos = 'https://jsonplaceholder.typicode.com';

export const Api = {
  getAllAlbums: async () => {
    let res = await axios.get(`${baseAlbums}/albums`);
    return res.data;
  },

  getSpecificAlbum: async (id: string) => {
    let res = await axios.get(`${baseAlbums}/albums/${id}`);
    return res.data;
  },

  getAllPhotos: async () => {
    let res = await axios.get(`${basePhotos}/photos`)
    return res.data
  },

  getSpecificPhoto: async (id: string) => {
    let res = await axios.get(`${basePhotos}/photos/${id}`)
    return res.data
  }
}

