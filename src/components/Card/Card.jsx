import classes from './Card.module.scss'
import React from 'react';
import ContentLoader from "react-content-loader";
import AppContext from './../../appContext'

const Card = ({
    CartItems,
    imgUrl,
    name,
    price,
    id,
    onPlus,
    onFavorite,
    favorited = false,
    loading = false }) => {

    const {isAddedItem, isAddedFavorite} = React.useContext(AppContext);
    // const [isAdded, setIsAdded] = React.useState(added);
    const onClickPlus = () => {
        onPlus({ id, imgUrl, name, price });
        // setIsAdded(!isAdded);
    };

    const [isLiked, setIsLiked] = React.useState(favorited);
    const onClickLike = () => {
        onFavorite({ imgUrl, name, price, id })
        setIsLiked(!isLiked);
    }

    return (
        <div className={classes.card}>
            {  loading ? (
                <ContentLoader
                    speed={2}
                    width={180}
                    height={250}
                    viewBox="0 0 150 300"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb">
                    <rect x="1" y="5" rx="10" ry="10" width="150" height="155" />
                    <rect x="0" y="170" rx="5" ry="5" width="155" height="15" />
                    <rect x="0" y="190" rx="5" ry="5" width="100" height="15" />
                    <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                    <rect x="120" y="230" rx="10" ry="10" width="32" height="32" />
                </ContentLoader>
            ) :
                <>
                    <div className={classes.favorite}>
                      {onFavorite &&( <img onClick={onClickLike}
                            src={isLiked ? 'img/like.svg' : 'img/unlike.svg'} />)}
                    </div>
                    <img widht={155} height={130} src={imgUrl} />
                    <h5>{name}</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>{price} руб.</b>
                        </div>
                       { onPlus && (<img className={classes.plus} onClick={onClickPlus}
                            src={isAddedItem(name) ? 'img/added.svg' : 'img/plus-btn.svg'} /> )}
                        
                    </div>
                </>
            }
        </div>
    )
}

export default Card;