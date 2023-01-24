import * as React from "react";
import {Route, Routes} from "react-router-dom";

import './styles/style.css'
import {MainLayout} from "./layouts/MainLayout";
import { Favorite, Home} from "./pages";


const App: React.FC = () => {
    const [overlayShow, setOverlayShow] = React.useState(false);
    const setOverlay = () => {
        setOverlayShow(!overlayShow);
    }
    return (
        <Routes>
            <Route path="/" element={<MainLayout setOverlay={setOverlay} overlayShow={overlayShow}/>}>
                <Route index element={<Home/>}/>
                <Route path="/favorite" element={<Favorite/>}/>
            </Route>
        </Routes>
    );
}

export {App}