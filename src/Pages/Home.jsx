import Card from './../components/Card/Card';
import AppContext from '../appContext';
import React from 'react';

function Home( {    
    searchItem,
    setSearchItem,
    changeSearchInput,
    items,
    onAddToFavorite,
    onAddToCart,
    isLoading,
    }
) { 
    console.log(onAddToCart)
    // рендер карточек с библиотекой Skeleton: когда загрузка - рендерится фэйковый массив Array(8).fill({})
    const RenderItems = () => {
        const filtredItems = items.filter((items) => items.name.toLowerCase().includes(searchItem.toLowerCase()) )
        return (
            (isLoading ? Array(8).fill({}) : filtredItems)
                .map((items, index) => 
                    (<Card key={index} name={items.name}
                    price={items.price} imgUrl={items.imgUrl}
                    onFavorite={(product) => onAddToFavorite(product)} 
                    onPlus={(product) => onAddToCart(product)}
                    loading={isLoading} />))
        )
    }
    return (
        <div className="content p-40">
                <div className='d-flex align-center justify-between mb-40'>
                    <h1>{searchItem ? `'Поиск по запросу:'${searchItem}`: 'Все кроссовки'}</h1>
                    <div className='search-block d-flex'>
                        <img src='./img/search.svg' />
                        {searchItem ? <img onClick={()=> setSearchItem('')} className='removeBtn' src='./img/remove.svg' alt='deleteText'/> : null }
                        <input onChange={changeSearchInput} value={searchItem} placeholder='Поиск...' />
                    </div>
                </div>
                <div className='Cards'>
                    {RenderItems()}
                </div>
            </div>
    );
}

export default Home; 
