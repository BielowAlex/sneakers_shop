import React from 'react';

interface IProps {
    children: React.ReactNode,
    setIsDelete: React.Dispatch<React.SetStateAction<boolean>>

}

const DeleteButton: React.FC<IProps> = ({setIsDelete, children}) => {
    return (
        <button onClick={()=>setIsDelete(true)} className="delete_button">
            {children}
        </button>
    );
};

export {DeleteButton};
