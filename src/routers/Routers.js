import { Routes, Route } from 'react-router-dom' 

import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import SignIn from '../pages/SignIn';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;