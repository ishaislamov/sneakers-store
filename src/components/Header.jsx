import {Link} from 'react-router-dom';
import AppContext from '../appContext';
import React from 'react';

const Header = (props) => {
    const { cartItems } = React.useContext(AppContext);
    const totalPrice = cartItems.reduce((sum, product) => product.price + sum, 0);

    return (
        <header className='d-flex justify-between align-center p-40'>
        <Link to='/'>
        <div className='d-flex align-center'>
            <img widht={40} hight={40} src='./img/logo.png' />
            <div>
                <h2>SNEAKERS STORE</h2>
                <p>Магазин лучших кроссовок</p>
            </div>
        </div>
        </Link>
        <ul className='d-flex align-center'>
            <li className='mr-30 cu-p'>
                <img onClick={props.cartOnClick} widht={18} hight={18} src='./img/cart.svg' />
                <span onClick={props.cartOnClick}> {totalPrice}руб.</span>
            </li>
            <li>
                <Link to='/favorites'>
                <img className='mr-30 cu-p' src='./img/favorite.svg' />
                </Link>
            </li>
            <li>
                <Link to='/orders'>
                <img className='cu-p' widht={18} hight={18} src='./img/user.svg' />
                </Link>
            </li>
        </ul>
    </header>
    )
}

export default Header;