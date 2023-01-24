import React from 'react';

import {IPoster} from "../../interfaces/poster_interface";

interface IProps{
    poster:IPoster,
    count:number
}


const Slide:React.FC<IProps> = ({poster:{imageUrl,id},count}) => {
    const [isShow,setIsShow] = React.useState<boolean>(true);

    React.useEffect(()=>{
        if(count===id*990){
            setIsShow(true)
        }else{
            setIsShow(false);
        }
    },[count, id])

    return (
        <div className="slide-list--el" style={{opacity:isShow?1:0}}>
            <img src={imageUrl} alt="slide"/>
            <button className="slide-list--el__btn">Buy</button>
        </div>
    );
};

export {Slide};
