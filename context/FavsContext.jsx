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
    if (!favorites.find((c) => c.name === character.name)) {
      toastSucces();
      favorites.push(character);
      setFavorites([...favorites]);
    } else if (favorites.find((c) => c.name === character.name)) {
      favorites.forEach((c, index, object) => {
        if (c.name === character.name) {
          toastError();
          object.splice(index, 1);
        }
      });
      setFavorites([...favorites]);
    }
  };

  const removeToFavorites = (character, toastError) => {
    favorites.forEach((c, index, object) => {
      if (c.name === character.name) {
        toastError();
        object.splice(index, 1);
      }
    });
    setFavorites([...favorites]);
  };

  return (
    <FavContext.Provider
      value={{ favorites, toggleFavorite, removeToFavorites }}
    >
      {children}
    </FavContext.Provider>
  );
};
