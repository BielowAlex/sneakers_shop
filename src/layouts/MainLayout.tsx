import React from 'react';
import {Outlet} from 'react-router-dom';

import {Footer, Header, Overlay} from "../components";

interface IProps{
    overlayShow:boolean,
    setOverlay: () => void;
}

const MainLayout: React.FC<IProps> = ({setOverlay,overlayShow}) => {
    return (
        <div>
            <Overlay setOverlay={setOverlay} overlayShow={overlayShow}/>
            <Header setOverlay={setOverlay}/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {MainLayout};
