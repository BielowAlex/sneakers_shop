import React from 'react';
import {SneakersCard} from "../SneakersCard";
import {useAppSelector} from "../../hook/redux";
import {OverlayButton} from "../CustomButtons";
import {Link} from "react-router-dom";

const FavoriteSneakersList: React.FC = () => {
    const {favoriteList} = useAppSelector(state => state.sneakersReducer);


    return (
            <div className={favoriteList.length > 0?'sneakers_list':'list_empty'}>
            {favoriteList.length > 0
                ? favoriteList.map(sneakers =>
                    <SneakersCard
                        sneakers={sneakers}
                        key={sneakers.id}/>)
                :<div className="is_empty">
                    <img width={70} height={70} src="img/sad.png" alt="sad smile"/>
                    <div className="desc">
                        <h3>Favorite list is empty</h3>
                        <p>You have not added anything to favorite list.</p>
                    </div>
                    <Link to='/'>
                        <OverlayButton>
                            Come back
                        </OverlayButton>
                    </Link>

                </div>}
        </div>
    );
};

export {FavoriteSneakersList};
