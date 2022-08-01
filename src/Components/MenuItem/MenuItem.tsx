import React from 'react';
import {CardButton} from "../CustomButtons";
import {ISneakers} from "../../interfaces/sneakers_interface";

interface IProps {
    sneakers:ISneakers,
    index?:number
}

const Menuitem:React.FC<IProps> = ({sneakers, index}) => {

    const {price,name,imageUrl} = sneakers;

    return (
        <div className="menu_sneakers_card">
            <div className="menu_sneakers_card_left">
                <img width={70} height={70} src={imageUrl} alt="sneakers"/>
            </div>
            <div className="menu_sneakers_card_right">
                <div className="title">
                    <h3>{name}</h3>
                    <div className="price">
                        <span className="subtext">Price:</span>
                        <span className="price_count">{price} UAH</span>
                    </div>
                </div>
                <CardButton isRemove={true} sneakers={sneakers} index={index}>
                    <svg width="32" height="32" viewBox="12 12 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5"/>
                    </svg>
                </CardButton>
            </div>
        </div>
    );
};

export {Menuitem};
