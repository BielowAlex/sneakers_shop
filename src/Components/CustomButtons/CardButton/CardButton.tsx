import React, {useState} from 'react';
import {ISneakers} from "../../../interfaces/sneakers_interface";
import {useAppDispatch} from "../../../hook/redux";
import {sneakersActions} from "../../../redux";

interface IProps {
    children?: React.ReactNode,
    sneakers?: ISneakers,
    isRemove: boolean,
    index?:number
}

const CardButton: React.FC<IProps> = ({children, sneakers, isRemove,index}) => {
    const [isAdded, setIsAdded] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    const addSneakers =  () => {
        !isRemove
            ? dispatch(sneakersActions.addProduct(sneakers))
            : dispatch(sneakersActions.removeProduct(index));
        setIsAdded(!isAdded);
    }

    React.useEffect(()=>{
        const timer = setTimeout(()=>{
            setIsAdded(false);
        },2000);
        return ()=>clearTimeout(timer);
    },[isAdded])

    return (
        <button className={`card_btn ${isAdded&&!isRemove?'_active':''}`} onClick={addSneakers}>
            {/*{isAdded ? <img src="img/added.svg" alt="added"/> : children}*/}
            {children?children:<span className="btn_item"/>}
        </button>
    );
};

export {CardButton};
