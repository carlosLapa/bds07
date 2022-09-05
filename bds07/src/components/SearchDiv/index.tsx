import ButtonIcon from 'components/ButtonIcon';
import './styles.css';

const SearchDiv = () => {
  return (
    <div className="search-container">
      <div className="search-container-description">
        <p>Digite sua busca</p>
      </div>
      <div className="search-btn-container">
        <ButtonIcon />
      </div>
    </div>
  );
};

export default SearchDiv;
