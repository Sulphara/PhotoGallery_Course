import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AlbumProps } from '../../Types/AlbumTypes';
import { PhotoProps } from '../../Types/PhotosTypes';

import { Api } from '../../../Api/AlbumApi';


export const Album = () => {
  const Navigate = useNavigate();
  const Params = useParams();

  const [album, setAlbum] = useState<AlbumProps>({ id: 0, title: '', userId: 0 })
  const [photos, setPhotos] = useState<PhotoProps>()

  useEffect(() => {
    if (Params.id) {
      LoadSpecificAlbum(Params.id);
      LoadPhotos(Params.id)
    }
  }, [])


  const LoadSpecificAlbum = async (id: string) => {
    let res = await Api.getSpecificAlbum(id)
    setAlbum(res);
  }

  const LoadPhotos = async (id: string) => {
    let res = await Api.getAllPhotos(id);
    setPhotos(res)
    console.log(res)

  }


  return (
    <div>
      <button onClick={e => Navigate(-1)}>Voltar</button>
      <br />
      Album: <p>{album.title}</p>

      <div>
        {photos.map((item) => (
          <div key={item.id}>
            <p>{item.albumId}</p>
            <p>{item.thumbnailUrl}</p>
            <p>{item.title}</p>
            <p>{item.url}</p>
          </div>
        ))}
      </div>

    </div>
  )
}
