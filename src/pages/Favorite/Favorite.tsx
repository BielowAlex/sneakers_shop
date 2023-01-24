import React from 'react';
import {FavoriteSneakers} from "../../components";


const Favorite:React.FC = () => {
    return (
        <>
            <div className="favorite_content_section">
                <FavoriteSneakers/>
            </div>
        </>
        
    );
};

export {Favorite};
