import { createContext, useState, useEffect } from 'react';

import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils.js';

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // HACK to insert data in the DB
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA, 'title');
  // }, []);

  const value = { products, setProducts };

  // useEffect(() => {
  //   setProducts(PRODUCTS);
  // }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
