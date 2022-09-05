import CarImg from 'assets/images/car-card 1.png';
import ButtonIcon from 'components/ButtonIcon';
import './styles.css';

const CarCard = () => {
  return (
    <div className="main-div">
      <div className="car-display-container">
        <div className="car-image-container">
          <img src={CarImg} alt="Imagem do carro" />
        </div>
        <div className="car-brand-container">
          <h1>Audi Supra TT</h1>
        </div>
        <div className="car-description-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
        </div>
        <div className="car-search-container">
          <ButtonIcon />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
