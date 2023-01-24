import React from 'react';

import {DeleteButton} from "../CustomButtons";
import {ISneakers} from "../../interfaces/sneakers_interface";
import {Transition, animated, config} from 'react-spring';
import {sneakersActions} from "../../redux";
import {useAppDispatch} from "../../hook/redux";

interface IProps {
    sneakers: ISneakers,
    index?: number
}

const OverlaySneakersCard: React.FC<IProps> = ({sneakers, index}) => {
    const [isDelete, setIsDelete] = React.useState<boolean>(false);
    const dispatch = useAppDispatch();

    const {price, name, imageUrl} = sneakers;

    React.useEffect(() => {
        const removeSneakers = setTimeout(() => {
            if (isDelete) {
                dispatch(sneakersActions.removeProduct(index));
            }
        }, 1000);
        return () => clearTimeout(removeSneakers);
    }, [dispatch, index, isDelete])

    return (
        <Transition items={isDelete}
                    from={{opacity: 1,transform:'translateX(0%)'}}
                    enter={{opacity: 1,transform:'translateX(0%)'}}
                    leave={{opacity: 0,transform:'translateX(100%)'}}
                    delay={500}
                    config={config.molasses}>
            {(styles, item) => !item &&
                <animated.div style={styles}>
                    <div className="overlay__sneakers-card">
                        <div className="overlay__sneakers-card--left">
                            <img width={70} height={70} src={imageUrl} className="overlay__sneakers-card--poster" alt="sneakers"/>
                        </div>
                        <div className="overlay__sneakers-card--right">
                            <div className="overlay__sneakers-card--info">
                                <h3 className="overlay__sneakers-card--title">{name}</h3>
                                <div className="overlay__sneakers-card--price">
                                    <span className="overlay__sneakers-card--subtext">Price:</span>
                                    <span className="overlay__sneakers-card--price_count">{price} UAH</span>
                                </div>
                            </div>
                            <DeleteButton setIsDelete={setIsDelete}>
                                <svg width="32" height="32" viewBox="12 12 12 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
                                        fill="#B5B5B5"/>
                                </svg>
                            </DeleteButton>
                        </div>
                    </div>
                </animated.div>
            }

        </Transition>

    );
};

export {OverlaySneakersCard};
