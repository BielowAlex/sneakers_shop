import React from 'react';

import {MenuItemList} from "../MenuItemList";
import {OverlayButton} from "../CustomButtons";
import {useAppDispatch, useAppSelector} from "../../hook/redux";
import {sneakersActions} from "../../redux";

interface IProps {
    setOverlay: () => void,
    overlayShow?: boolean
}


const Overlay: React.FC<IProps> = ({setOverlay, overlayShow}) => {

    const {cartList, sum, commission, isBought} = useAppSelector(state => state.sneakersReducer);
    const dispatch = useAppDispatch();


    return (
        <div className={`overlay ${overlayShow ? '_active' : ''}`}>
            <div
                className={`back ${overlayShow ? '_active' : ''}`}
                onClick={setOverlay}/>

            <div className={`cart-menu ${overlayShow ? '_active' : ''}`}>
                <div className="cart-menu__top">
                    <h2 className="title">Cart</h2>
                    <span className="close-btn" onClick={setOverlay}>X</span>
                </div>
                {cartList.length > 0 &&
                    <div className="cart-menu__content">
                        <MenuItemList/>
                        <div className="checkout">
                            <ul className="order-desc">
                                <li className="order-desc--el">
                                    <span className="order-desc--el__title">Order:</span>
                                    <div className="order-desc--el__dots"/>
                                    <span className="order-desc--el__sum">{sum} UAH;</span>
                                </li>
                                <li className="order-desc--el">
                                    <span className="order-desc--el__title">Commission 5%:</span>
                                    <div className="order-desc--el__dots"/>
                                    <span className="order-desc--el__sum">{commission} UAH;</span>
                                </li>
                            </ul>
                                <OverlayButton handler={() => dispatch(sneakersActions.buy())}>
                                    Checkout
                                </OverlayButton>
                        </div>
                    </div>
                }

                {cartList.length === 0 && !isBought &&
                    <div className="cart-empty">
                        <img height={120} width={120} src="/img/empty.png" alt="empty box"/>
                        <h2>Cart is empty</h2>
                        <p>Add at least one pair of sneakers to complete your order.</p>

                        <OverlayButton handler={setOverlay}>
                            Come back
                        </OverlayButton>


                    </div>

                }

                {cartList.length === 0 && isBought &&
                    <div className="cart_empty">
                        <img height={120} width={83} src="/img/complete.png" alt="complete"/>
                        <h2>The order has been placed!</h2>
                        <p>Your order will be sent to courier delivery soon.</p>

                        <OverlayButton handler={setOverlay}>
                            Come back
                        </OverlayButton>


                    </div>
                }

            </div>

        </div>
    );
};

export {Overlay};
