import React from 'react';
import {FavoriteSneakers, Overlay} from "../../Components";
interface IProps{
    setOverlay:()=>void,
    overlayShow?:boolean
}

const Favorite:React.FC<IProps> = ({setOverlay,overlayShow}) => {
    return (
        <>
            <Overlay setOverlay={setOverlay} overlayShow={overlayShow}/>
            <div className="favorite_content_section">
                <FavoriteSneakers/>
            </div>
        </>
        
    );
};

export {Favorite};
