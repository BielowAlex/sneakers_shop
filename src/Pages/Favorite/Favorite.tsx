import React from 'react';
import {FavoriteSneakers} from "../../Components";


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
