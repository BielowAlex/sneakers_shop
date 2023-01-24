import React from 'react';

interface IProps {
    children:React.ReactNode,
    handler?:()=>void
}

const OverlayButton:React.FC<IProps> = ({children,handler}) => {
    return (
        <button className="overlay_btn" onClick={handler}>
            {children}
        </button>
    );
};

export {OverlayButton};
