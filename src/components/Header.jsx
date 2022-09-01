const Header = () => {
    return (
        <header className='d-flex justify-between align-center p-40'>
        <div className='d-flex align-center'>
            <img widht={40} hight={40} src='./img/logo.png' />
            <div>
                <h2>SNEAKERS STORE</h2>
                <p>Магазин лучших кроссовок</p>
            </div>
        </div>
        <ul className='d-flex align-center'>
            <li className='mr-30'>
                <img widht={18} hight={18} src='./img/cart.svg' />
                <span> 1205 руб.</span>
            </li>
            <li>
                <img widht={18} hight={18} src='./img/user.svg' />
            </li>
        </ul>
    </header>
    )
}

export default Header;