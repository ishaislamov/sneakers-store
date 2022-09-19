import Card from '../components/Card/Card'
import React from 'react';
import axios from 'axios'
import AppContext from '../appContext'

function Orders() {
    const {onAddToCart, onAddToFavorite} = React.useContext(AppContext);
    const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {
        async function orderData () 
        {const { data } = await axios.get('https://63183e83f6b281877c66e21e.mockapi.io/Orders');
        setOrders(data.reduce((prev, product) => [...prev, ...product.items], []));
        console.log(data.map((product) => product.items).flat())
    }
    orderData()
    }, []);

    return (
        <div className="content p-40">
            <h1 className="content mb-40">Мои заказы</h1>
            <div className='d-flex flex-wrap ml-35'>
                {orders.map((items, index) => (<Card key={index} name={items.name}
                    price={items.price} id={items.id} imgUrl={items.imgUrl}
                />))}
            </div>
        </div>

    );
};

export default Orders; 
