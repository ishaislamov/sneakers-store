import React from 'react';
import AppContext from '../appContext';

const Info = (title, image, description) => {

const {setCartOpened} = React.useContext(AppContext);

    <div className='cartEmpty d-flex align-center justify-center flex-column'>
        <img src={image} />
        <div className='emptyText'>
            <h2 className='d-flex justify-center'>{title}</h2>
            <p className='d-flex justify-center'>{description}</p>
        </div>
        <button onClick={() => setCartOpened(true)} className='greenButton'>Вернуться назад
            <img src='./img/left-arrow.svg' />
        </button>
    </div>
}

export default Info;