import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // HACK to insert data in the DB
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA, 'title');
  // }, []);

  useEffect(() => {
    //HACK to use an async function inside useEffect we need to crate our own async function within the callback
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap(); //HACK and call it inside the callback after has been defined
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
