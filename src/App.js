import Overlay from './components/Overlay';
import Header from './components/Header';
import React from 'react';
import axios from 'axios';
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import { Routes, Route } from 'react-router-dom';
import AppContext from './appContext';
import Orders from './Pages/Orders';


function App() {
    const [cartOpened, setCartOpened] = React.useState(false);
    const [cartItems, setCartItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [items, setItems] = React.useState([]);
    const [searchItem, setSearchItem] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(true);

    const onClickRemove = () => {
        setCartOpened(!cartOpened)
    };

    React.useEffect(() => {
        async function fetchData() {
            const cartResponce = await axios.get('https://63183e83f6b281877c66e21e.mockapi.io/Cart');
            const favoriteResponce = await axios.get('https://63183e83f6b281877c66e21e.mockapi.io/Favorite')
            const itemsResponce = await axios.get('https://63183e83f6b281877c66e21e.mockapi.io/Items')
            
            setIsLoading(false);
            setCartItems(cartResponce.data);
            setFavorites(favoriteResponce.data);
            setItems(itemsResponce.data);
        }
        fetchData()
    }, []);


    // здесь пушу в пустой массив catrItems кроссовки в корзину и удаление
    //  при обратном нажатии (нажатием плюс на карточке)
    const onAddToCart = (product) => {
        if(cartItems.find(cartProduct => cartProduct.name === product.name)) {
            axios.delete(`https://63183e83f6b281877c66e21e.mockapi.io/Cart/${product.name}`)
            setCartItems(prev => prev.filter(cartProduct => cartProduct.name !== product.name));
        }
        else {
            axios.post('https://63183e83f6b281877c66e21e.mockapi.io/Cart', product);
            setCartItems(prev => [...prev, product]);
        } 
    }
    // добавление и удаление кроссовок в favorite
    const onAddToFavorite = async (product) => {
        if(favorites.find(favProduct => favProduct.id === product.id)) {
            axios.delete(`https://63183e83f6b281877c66e21e.mockapi.io/Favorite/${product.id}`)
        }
        else {
            const { data } = await axios.post('https://63183e83f6b281877c66e21e.mockapi.io/Favorite', product);
            setFavorites(prev => [...prev, data]);
        }
    };
    // поиск
    const changeSearchInput = (event) => {
        setSearchItem(event.target.value)
    }
    //удаление кроссовок из корзины и бэкэнда (mockapi)
    const onDeleteItem = (id) => {
        axios.delete(`https://63183e83f6b281877c66e21e.mockapi.io/Cart/${id}`)
        setCartItems((prev) => prev.filter(item => item.id !== id));
    }

    // удаление кроссовок из Избранных из стэйта (и mockapi)
    const deleteFromFavorite = (id) => {
        axios.delete(`https://63183e83f6b281877c66e21e.mockapi.io/Favorite/${id}`)
        setFavorites((prev) => prev.filter(item => item.id !== id)); 
    }
    // метод позволяющий убрать галочки из карточек по мере удаления из корзины 
    const isAddedItem = (name) => {
        return cartItems.some((product) => product.name === name)
    } 
    const isAddedFavorite = (name) => {
        return favorites.some((product) => product.name === name)
    }

    return (
        <AppContext.Provider value={{items,
        cartItems,
        setCartItems,
        favorites,
        isAddedItem,
        isAddedFavorite,
        onAddToFavorite,
        onAddToCart
         }}>

            <div className="wrapper clear">
            <Header cartOnClick={() => setCartOpened(true)} />
            {cartOpened ? <Overlay onClickRemove={onClickRemove}
                items={cartItems}
                onRemoveItem={onDeleteItem}
                setCartItems={setCartItems}
                cartItems={cartItems} /> : null}
            <Routes>
                <Route path='/' exact element={<Home searchItem={searchItem}
                    setSearchItem={setSearchItem}
                    changeSearchInput={changeSearchInput}
                    items={items}
                    onAddToFavorite={onAddToFavorite}
                    onAddToCart={onAddToCart}
                    cartItems={cartItems}
                    isLoading={isLoading} />}>
                </Route>
                <Route path="/favorites" exact element={<Favorites
                 favorited={true}
                 deleteFromFavorite={deleteFromFavorite}
                 onAddToFavorite={onAddToFavorite} />}></Route>
                 <Route path="/orders" exact element={<Orders
                />}></Route>
            </Routes>
        </div>
        </AppContext.Provider>
    );
};

export default App;