import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesContextProvider } from './store/favorites-context'; //Para pegarmos um export que não é o default , devemos colocar o nome do export entre chaves.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FavoritesContextProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </FavoritesContextProvider>
);
