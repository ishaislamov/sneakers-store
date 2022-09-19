import React from 'react';
import axios from 'axios';

const Overlay = ({ onAddToCart, onRemoveItem, cartItems, setCartItems, onClickRemove, items = [] }) => {

const totalPrice = cartItems.reduce((sum, product) => product.price + sum, 0);
const [isOrderComplete, setIsOrderComplete] = React.useState(false);
const [isOrderId, setIsOrderId] = React.useState(null);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const onClickOrder = async () => {
        const { data } = await axios.post(`https://63183e83f6b281877c66e21e.mockapi.io/Orders`,
        {items: cartItems});
        setIsOrderId(data.id);
        setIsOrderComplete(true);
        setCartItems([]);

        for (let i = 0; i < cartItems.length; i++) {
            const item = cartItems[i];
            await axios.delete(`https://63183e83f6b281877c66e21e.mockapi.io/Cart`, + item.id);
            await delay(1000);
          }
    }

    return (
        <div className='overlay'>
            <div className='drawer'>
                <h2 className='d-flex justify-between'> Корзина
                    <img className='removeBtn cu-p' src='./img/remove.svg'
                        onClick={onClickRemove} />
                </h2>
                {
                    items.length > 0 ?
                        <div className='orderCart d-flex flex-column flex'>
                            <div className='items'>
                                {items.map((items) => (
                                    <div key={items.id} className='cartItem d-flex align-center mb-20'>
                                        <img className='mr-20' widht={70} height={70} src={items.imgUrl} />
                                        <div className='cartInfo mr-20'>
                                            <p className='mb-5'>{items.name}</p>
                                            <b> {items.price} руб. </b>
                                        </div>
                                        <img onClick={() => onRemoveItem(items.id)} className='removeBtn' src='./img/remove.svg' />
                                    </div>
                                ))}
                            </div>

                            <div className='cartTotalBlock'>
                                <ul>
                                    <li className='mb-30'>
                                        <span>Итого:</span>
                                        <div></div>
                                        <b>{totalPrice} руб.</b>
                                    </li>
                                </ul>
                                <button onClick={onClickOrder} className='greenButton'>Оформить заказ
                                    <img src='./img/arrow.svg' />
                                </button>
                            </div>
                        </div> 

                        : <div className='cartEmpty d-flex flex-column align-center justify-center flex'>
                            <img widht={120} height={120} src={isOrderComplete ? './img/order.jpg' : './img/emptycart.jpg'} />
                            <div className='emptyText'>
                                <h2 className='d-flex justify-center'>
                                    {isOrderComplete ? 'Заказ оформлен!' : 'Корзина пуста'}</h2>
                                <p> {isOrderComplete ? `Ваш заказ # ${isOrderId} скоро будет передан курьерской доставке` :
                                    'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}</p>
                            </div>
                            <button onClick={onClickRemove} className='greenButton'>Вернуться назад
                                <img src='./img/left-arrow.svg' />
                            </button>
                        </div>
                }
            </div>
        </div>
    )
}

export default Overlay;