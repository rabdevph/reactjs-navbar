import Logo from './brand.png';

const Brand = () => {
  return (
    <div className="brand">
      <img src={Logo} alt="" className="brand-logo" />
      <p className="brand-text">TARGET</p>
    </div>
  );
};

export default Brand;
