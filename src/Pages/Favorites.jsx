import Card from '../components/Card/Card'
import React from 'react';
import AppContext from '../appContext'

function Favorites({onAddToFavorite, favorited}) {

    const {favorites, onAddToCart} = React.useContext(AppContext);

    return (
        <div className="content p-40">
            <h1 className="content mb-40">Мои закладки</h1>
            <div className='FavoritesCards d-flex flex-wrap ml-30'>
                {favorites.map((items, index) => (<Card key={index} name={items.name}
                    price={items.price} id={items.id} imgUrl={items.imgUrl}
                    onFavorite={onAddToFavorite}
                    favorited={true}
                    onPlus={(product) => onAddToCart(product)}
                />))}
            </div>
        </div>

    );
};

export default Favorites; 
