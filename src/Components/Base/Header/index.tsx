import * as S from './style';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <S.Container>
      <S.NavBar>
        <Link to={'/'} style={{ textDecoration: 'none' }}><p>Galeria de Fotos</p></Link>
        <Link to='/sobre' style={{ textDecoration: 'none' }} ><p>Sobre o projeto</p></Link>
      </S.NavBar>
    </S.Container>

  )
}
