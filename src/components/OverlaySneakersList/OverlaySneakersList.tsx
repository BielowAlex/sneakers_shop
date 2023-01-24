import React from 'react';
import {OverlaySneakersCard} from "../OverlaySneakersCard/OverlaySneakersCard";
import {useAppSelector} from "../../hook/redux";
import {createID} from "../../hook/createID";

const OverlaySneakersList:React.FC = () => {
    const {cartList} = useAppSelector(state => state.sneakersReducer);

    return (
        <div className="overlay__sneakers-list">
            {cartList && cartList.map((sneakers,index)=><OverlaySneakersCard key={createID()} sneakers={sneakers} index={index}/>)}
        </div>
    );
};

export {OverlaySneakersList};
