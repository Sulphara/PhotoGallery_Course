import axios from 'axios';

const baseAlbums = 'https://jsonplaceholder.typicode.com/albums';
const basePhotos = 'https://jsonplaceholder.typicode.com/photos';

export const Api = {
  getAllAlbums: async () => {
    let res = await axios.get(`${baseAlbums}`);
    return res.data;
  },

  getSpecificAlbum: async (id: string) => {
    let res = await axios.get(`${baseAlbums}/${id}`);
    return res.data;
  },

  getAllPhotos: async (id: string) => {
    let res = await axios.get(`${basePhotos}/${id}`)
    return res.data
  }
}

