import Logo from './brand.png';
import './brand.css';

const Brand = () => {
  return (
    <div className='brand'>
      <img src={Logo} alt='' className='brand-logo' />
      <p className='brand-text'>BRAND</p>
    </div>
  );
};

export default Brand;
