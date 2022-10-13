import * as S from './style';

type Props = {
  children: React.ReactNode
}

export const MainArea = ({ children }: Props) => {
  return (
    <S.Container>{children}</S.Container>


  )
}
