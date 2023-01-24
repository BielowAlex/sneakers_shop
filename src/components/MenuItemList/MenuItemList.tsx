import React from 'react';
import {Menuitem} from "../MenuItem/MenuItem";
import {useAppSelector} from "../../hook/redux";
import {createID} from "../../hook/createID";

const MenuItemList:React.FC = () => {
    const {cartList} = useAppSelector(state => state.sneakersReducer);

    return (
        <div className="menu_item_list">
            {cartList && cartList.map((sneakers,index)=><Menuitem key={createID()} sneakers={sneakers} index={index}/>)}
        </div>
    );
};

export {MenuItemList};
