import React from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import {Footer, Header} from "../Components";

interface IProps{
    setOverlay:()=>void
}

const MainLayout:React.FC<IProps> = ({setOverlay}) => {
    const {pathname} = useLocation();

    return (
        <div>
            {pathname !=='/login' && pathname!=='/signup'
                ?<Header setOverlay={setOverlay}/>
                :null
            }
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {MainLayout};
