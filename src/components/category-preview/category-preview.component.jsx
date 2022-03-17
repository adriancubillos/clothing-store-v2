import { useNavigate } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import './category-preview.styles.scss';

export const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`${title}`);
  };

  return (
    <div className='category-preview-container'>
      <h2>
        <span className='title' onClick={navigateHandler}>
          {title.toUpperCase()}
        </span>
      </h2>
      <div className='preview'>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};
