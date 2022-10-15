import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {},
}); // O nome segue o padrão de nomeclatura de componentes , porque no final ele vira um...

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((previousUserFavorites) => {
            return previousUserFavorites.concat(favoriteMeetup); // concat junta os 2 objetos , porém retorna um novo array , diferente do push.
        });
    }
    
    function removeFavoriteHandler(meetupId) {
        setUserFavorites((previousUserFavorites) => {
            return previousUserFavorites.filter(meetup => {
                return meetup.id !== meetupId
            }); // retorna um novo array filtrado :)
        });
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => {
            return meetup.id === meetupId 
        });
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;