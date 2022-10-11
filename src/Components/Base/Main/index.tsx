import * as S from './style';
import { About } from '../../Pages/About/About';

type Props = {
  children: React.ReactNode
}

export const MainArea = ({ children }: Props) => {
  return (
    <S.Container>{children}</S.Container>


  )
}
