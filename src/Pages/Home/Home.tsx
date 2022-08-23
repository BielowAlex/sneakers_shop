import React from 'react';
import {Slider, Sneakers} from "../../Components";

const Home:React.FC = () => {
    return(
        <>
            <Slider/>
            <div className="content_section">
                <Sneakers/>
            </div>
        </>
    );
};

export {Home};
