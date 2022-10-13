import * as S from './style';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { AlbumProps } from '../../Types/AlbumTypes';
import { Api } from '../../../Api/AlbumApi';

export const Home = () => {

  const [albums, setAlbums] = useState<AlbumProps[]>([]);


  useEffect(() => {
    LoadAlbums();
  }, [])

  const LoadAlbums = async () => {
    let res = await Api.getAllAlbums();
    setAlbums(res);
  };


  return (
    <S.Container>
      {albums.map((item) => (
        <div key={item.id}>
          <Link to={`album/${item.id}`} style={{ textDecoration: 'none' }}>
            <S.AlbumTitle>
              <p >
                {item.title}
              </p>
            </S.AlbumTitle>
          </Link>
        </div>
      ))}
    </S.Container>
  )
}
