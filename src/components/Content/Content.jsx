import Card from './Card/Card';

const Content = () => {
    return (
        <div className="content p-40">
            <div className='d-flex align-center justify-between mb-40'>
                <h1>Все кроссовки</h1>
                <div className='search-block d-flex'>
                    <img src='./img/search.svg' />
                    <input placeholder='Поиск...' />
                </div>
            </div>
            <div className='Cards d-flex'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Content;