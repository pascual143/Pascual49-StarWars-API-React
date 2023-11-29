const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
    },
    actions: {
      addFavorites: (name) => {
        const store = getStore();
        setStore({ favorites: [...store.favorites, name] });
      },

      deleteItem: (i) => {
        const store = getStore();
        let newFavorites = store.favorites.filter((item, index) => {
          return i != index;
        });
        setStore({ favorites: newFavorites });
      },

      loadSomeData: () => {
        fetch("https://swapi.dev/api/people/")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setStore({ people: data.results });
          })
          .catch((err) => console.error(err));

        fetch("https://swapi.dev/api/planets/")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setStore({ planets: data.results });
          })
          .catch((err) => console.error(err));

        fetch("https://swapi.dev/api/vehicles/")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setStore({ vehicles: data.results });
          })
          .catch((err) => console.error(err));
      },
    },
  };
};

export default getState;
