import { Routes, Route } from 'react-router-dom';

import Navbar from './sections/Navbar.jsx';
import Content from './sections/Content.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Content />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
