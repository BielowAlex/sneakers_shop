import React from 'react';

import {IPoster} from "../../interfaces/poster_interface";

interface IProps{
    poster:IPoster,
    count:number
}


const Poster:React.FC<IProps> = ({poster:{imageUrl,id},count}) => {
    const [isShow,setIsShow] = React.useState<boolean>(true);

    React.useEffect(()=>{
        if(count===id*990){
            setIsShow(true)
        }else{
            setIsShow(false);
        }
    },[count, id])

    return (
        <div className="poster" style={{opacity:isShow?1:0}}>
            <img src={imageUrl} alt="slide"/>
            <button>Buy</button>
        </div>
    );
};

export {Poster};
