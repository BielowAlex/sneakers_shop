import * as React from "react";
import {Routes, Route} from "react-router-dom";

import './styles/style.css'
import {Cart, Favorite, Home} from "./Pages";
import {MainLayout} from "./Layouts/MainLayout";




const App: React.FC = () => {
    const [overlayShow, setOverlayShow] = React.useState(false);
    console.log(localStorage.favoriteList)

    const setOverlay = () => {
        setOverlayShow(!overlayShow);
    }

    return (
        <Routes>
            <Route path="/" element={<MainLayout setOverlay={setOverlay}/>}>
                <Route index element={<Home setOverlay={setOverlay} overlayShow={overlayShow}/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/favorite" element={<Favorite setOverlay={setOverlay} overlayShow={overlayShow}/>}/>
            </Route>
        </Routes>
    );
}

export {App}