import React, {useState} from 'react';

import {ISneakers} from "../../../interfaces/sneakers_interface";
import {useAppDispatch} from "../../../hook/redux";
import {sneakersActions} from "../../../redux";

interface IProps {
    children?: React.ReactNode,
    sneakers?: ISneakers,
}

const CardButton: React.FC<IProps> = ({children, sneakers}) => {
    const [isAdded, setIsAdded] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    const addSneakers =  () => {
            dispatch(sneakersActions.addProduct(sneakers))
            setIsAdded(true)

    }

    React.useEffect(()=>{
        const timer = setTimeout(()=>{
            setIsAdded(false);
        },2000);
        return ()=>clearTimeout(timer);
    },[isAdded])

    return (
        <button className={`card-btn ${isAdded?'_active':''}`} onClick={addSneakers}>
            {children?children:<span className="card-btn__item"/>}
        </button>
    );
};

export {CardButton};
