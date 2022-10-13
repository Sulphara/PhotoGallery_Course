import * as S from './style';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { PhotoProps } from '../../Types/PhotosTypes';
import { Api } from '../../../Api/AlbumApi';

export const Photos = () => {
  const Params = useParams();
  const Navigate = useNavigate();

  const [photo, setPhoto] = useState<PhotoProps>({ albumId: 0, id: 0, thumbnailUrl: '', title: '', url: '' });

  const GetPhoto = async (id: string) => {
    let res = await (Api.getSpecificPhoto(id));
    setPhoto(res)
  };

  useEffect(() => {
    if (Params.id)
      GetPhoto(Params.id);
  }, [])


  return (
    <S.Container>
      <S.TitleArea>
        <button onClick={e => Navigate(-1)} >Voltar</button>
      </S.TitleArea>
      <S.ImgArea src={photo.url} />
    </S.Container>
  )
}
