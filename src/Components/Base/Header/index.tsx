import * as S from './style';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <S.Container>
      <S.NavBar>
        <Link to='/sobre'><p>Sobre o projeto</p></Link>
      </S.NavBar>
    </S.Container>

  )
}
