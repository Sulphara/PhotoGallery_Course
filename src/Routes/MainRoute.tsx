import { Routes, Route } from 'react-router-dom';
import { Home } from '../Components/Pages/Home/index';
import { Album } from '../Components/Pages/Album/index';
import { About } from '../Components/Pages/About/About';
import { NotFound } from '../Components/Pages/NotFound';

export const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Album/:id' element={<Album />} />
        <Route path='/sobre' element={<About />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
    </div>
  )
}
