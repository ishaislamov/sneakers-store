const Card = () => {
    return (
        <div className='card'>
    <div className='favorite'>
        <img src='img/like.svg' />
    </div>
    <img widht={133} height={112} src='./img/goods/good-1.jpg' />
    <h5> Мужские Кроссовки Nike Air Max 270</h5>
    <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
            <span>Цена:</span>
            <b> 12499 руб.</b>
        </div>
        <button className='button'>
            <img widht={12} height={12} src='./img/plus-button.svg' />
        </button>
    </div>
</div>
    )
}

export default Card;