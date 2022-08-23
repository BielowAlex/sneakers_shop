import React from 'react';

import {SneakersCard} from "../SneakersCard";
import {useAppDispatch, useAppSelector} from "../../hook/redux";
import {sneakersActions} from "../../redux";

const SneakersList: React.FC = () => {
    const {sneakersList} = useAppSelector(state => state.sneakersReducer);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        dispatch(sneakersActions.getSneakersList())
    }, [dispatch]);

    return (
        <div className={sneakersList.length > 0 ? 'sneakers_list' : 'empty_sneakers_list'}>
            {sneakersList.length > 0
                ? sneakersList.map(sneakers => <SneakersCard sneakers={sneakers} key={sneakers.id}/>)
                : <div className="cart_empty">
                    <img height={100} width={100} src="/img/sad.png" alt="empty box"/>
                    <h2>List is empty</h2>
                    <p>Such beauties are not in our shop</p>
                </div>
            }
        </div>
    );
};

export {SneakersList};
