import { Outlet } from 'react-router-dom';

const Content = () => {
  return (
    <main className='content | flex items-center justify-center h-custom | md:h-screen'>
      <Outlet />
    </main>
  );
};

export default Content;
