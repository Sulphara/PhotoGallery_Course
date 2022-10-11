import { Header } from './Components/Base/Header/index';
import { Footer } from './Components/Base/Footer/index';
import { MainArea } from './Components/Base/Main/index';
import * as S from './AppStyle';

import { MainRoute } from './Routes/MainRoute';

const App = () => {
  return (
    <S.MainArea>
      <Header />
      <MainArea>
        <MainRoute />
      </MainArea>
      <Footer />
    </S.MainArea>
  )
}

export default App 