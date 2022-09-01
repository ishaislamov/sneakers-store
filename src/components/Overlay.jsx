const Overlay = () => {
    return (
        <div style={{ display: 'none' }} className='overlay'>
                <div className='drawer'>
                    <h2 className='d-flex justify-between'> Корзина
                        <img className='removeBtn cu-p' src='./img/remove.svg' />
                    </h2>
                    <div className='items'>
                        <div className='cartItem d-flex align-center mb-20'>
                            <img className='mr-20' widht={70} height={70} src='./img/goods/good-1.jpg' />
                            <div className='cartInfo mr-20'>
                                <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                                <b> 12 999 руб. </b>
                            </div>
                            <img className='removeBtn' src='./img/remove.svg' />
                        </div>
                        <div className='cartItem d-flex align-center'>
                            <img className='mr-20' widht={70} height={70} src='./img/goods/good-2.jpg' />
                            <div className='cartInfo mr-20'>
                                <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                                <b> 12 999 руб. </b>
                            </div>
                            <img className='removeBtn' src='./img/remove.svg' />
                        </div>
                    </div>

                    <div className='cartTotalBlock'>
                        <ul>
                            <li>
                                <span>Итого:</span>
                                <div></div>
                                <b>25 598 руб.</b>
                            </li>
                            <li>
                                <span>Налог 5%:</span>
                                <div></div>
                                <b> 1074 руб</b>
                            </li>
                        </ul>
                        <button className='greenButton'>Оформить заказ
                            <img src='./img/arrow.svg' />
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default Overlay;