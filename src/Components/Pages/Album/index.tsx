import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AlbumProps } from '../../Types/AlbumTypes';
import { PhotoProps } from '../../Types/PhotosTypes';
import * as S from './style';

import { Api } from '../../../Api/AlbumApi';


export const Album = () => {
  const Navigate = useNavigate();
  const Params = useParams();

  const [album, setAlbum] = useState<AlbumProps>({ id: 0, title: '', userId: 0 })
  const [photos, setPhotos] = useState<PhotoProps[]>([])

  useEffect(() => {
    if (Params.id) {
      LoadSpecificAlbum(Params.id);
      LoadAllPhotos()
    }
  }, [])


  const LoadSpecificAlbum = async (id: string) => {
    let res = await Api.getSpecificAlbum(id)
    setAlbum(res);
  }

  const LoadAllPhotos = async () => {
    let res = await Api.getAllPhotos();
    setPhotos(res)
    console.log(res)

  }


  return (
    <S.Container>
      <button onClick={e => Navigate(-1)}>Voltar</button>
      <S.TitleArea>Album: {album.title}</S.TitleArea>

      <S.PhotosArea>
        {photos.map((item) => (
          <div key={item.id}>
            <Link to={`/foto/${item.id}`}>
              <S.ImgArea src={item.thumbnailUrl}></S.ImgArea>
            </Link>
          </div>
        ))}
      </S.PhotosArea>

    </S.Container>
  )
}

