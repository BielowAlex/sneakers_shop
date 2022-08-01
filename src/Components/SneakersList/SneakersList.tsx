import React from 'react';

import {SneakersCard} from "../SneakersCard";
import {useAppDispatch, useAppSelector} from "../../hook/redux";
import {sneakersActions} from "../../redux";

const SneakersList:React.FC = () => {
    const {sneakersList} = useAppSelector(state => state.sneakersReducer);
    const dispatch = useAppDispatch();

    React.useEffect(()=>{
        dispatch(sneakersActions.getSneakersList())
    },[dispatch]);

    return (
        <div className="sneakers_list">
            {sneakersList.length>0 && sneakersList.map(sneakers=><SneakersCard sneakers={sneakers} key={sneakers.id}/> )}
        </div>
    );
};

export {SneakersList};
