import { ReactComponent as MainImage } from 'assets/images/car-header 1.svg';
import ButtonIcon from 'components/ButtonIcon';
import Navbar from 'components/Navbar';
import CarCard from 'components/CarCard';
import './styles.css';
import Catalog from 'pages/Catalog';
import SearchDiv from 'components/SearchDiv';

const Home = () => {
  return (
    <>
      <Navbar />
      {/* 
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
        <div className="search-button-container">
          <ButtonIcon />
          <h1>Comece agora a navegar</h1>
        </div>
      </div>
    */}
      <SearchDiv />
      <Catalog />
    </>
  );
};

export default Home;
