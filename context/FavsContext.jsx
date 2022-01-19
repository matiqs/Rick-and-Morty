import { createContext, useEffect, useState } from "react";

export const FavContext = createContext();

export const FavContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    let data = localStorage.getItem("favorites");
    if (data !== null) {
      setFavorites(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (character, toastSucces, toastError) => {
    if (!favorites.find((c) => c.id === character.id)) {
      toastSucces();
      setFavorites([character, ...favorites]);
    } else {
      const newFavorites = favorites.filter((element) => {
        return element.id != character.id;
      });
      toastError();
      setFavorites(newFavorites);
    }
  };

  return (
    <FavContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavContext.Provider>
  );
};
