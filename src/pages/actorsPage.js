import React, { useState, useEffect } from "react";
import PageTemplate from "../components/actorsTemplateListPage";

import { getActors } from "../api/tmdb-api";

const HomePage = (props) => {
  const [actors, setActors] = useState([]);
  //const favorites = actors.filter((m) => m.favorite);
  //localStorage.setItem("favorites", JSON.stringify(favorites));

  const addToFavorites = (movieId) => {
    const updatedActors = actors.map((a) =>
      a.id === movieId ? { ...a, favorite: true } : a
    );
    setActors(updatedActors);
  };

  useEffect(() => {
    getActors().then(a => {
        console.log(a)
      setActors(a);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate
      title="Actors"
      actors={actors}
      selectFavorite={addToFavorites}
    />
  );
};
export default HomePage;