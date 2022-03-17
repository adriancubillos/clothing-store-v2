import { useContext, Fragment } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../contexts/categories.context';

import './shop.styles.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((category) => (
        <Fragment key={category}>
          <h2>{category}</h2>
          <div className='products-container'>
            {categoriesMap[category].map((category) => (
              <ProductCard key={category.id} product={category} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
