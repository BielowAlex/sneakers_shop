import React from 'react';

import {useAppDispatch} from "../../hook/redux";
import {sneakersActions} from "../../redux";

interface IProps{
    isActive:boolean
}

const Filter: React.FC<IProps> = ({isActive}) => {

    const [gender, setGender] = React.useState<string>('');
    const [shoeSize, setShoeSize] = React.useState<number>(0);
    const [minPrice, setMinPrice] = React.useState<number>(0);
    const [maxPrice, setMaxPrice] = React.useState<number>(3000);

    const dispatch = useAppDispatch();

    React.useEffect(() => {
        if (isActive) {
            dispatch(sneakersActions.filterList({
                gender: gender,
                maxPrice: maxPrice,
                minPrice: minPrice,
                shoeSize: shoeSize
            }))
        }else{
            dispatch(sneakersActions.filterList({
                gender: '',
                maxPrice: 0,
                minPrice: 0,
                shoeSize: 0
            }))
        }

    }, [dispatch,gender, shoeSize, minPrice, maxPrice, isActive])

    return (
        <div className="sneakers_top_filter">
            <ul className={`filter_options ${isActive ? '_active' : ''}`}>
                <li className="gender">
                    <span>Gender:</span>
                    <label>
                        <span>
                            <input
                                type="radio"
                                name="gender"
                                onClick={() => setGender('M')}/>
                                Male
                        </span>
                        <span>
                            <input
                                type="radio"
                                name="gender"
                                onClick={() => setGender('F')}/>
                                Female
                        </span>
                    </label>
                </li>
                <li>
                    <span>Shoe size:</span>
                    <input
                        type="number"
                        min={37}
                        max={48}
                        onChange={(e) => setShoeSize(e.target.value !== '' ? parseInt(e.target.value) : 0)}/>
                </li>
                <li>
                    <span>Min price:</span>
                    <input
                        type="number"
                        min={0}
                        max={3000}
                        onChange={(e) => setMinPrice(e.target.value !== '' ? parseInt(e.target.value) : 0)}
                    />
                </li>
                <li>
                    <span>Max price:</span>
                    <input
                        type="number"
                        min={999}
                        max={3000}
                        onChange={(e) => setMaxPrice(e.target.value !== '' ? parseInt(e.target.value) : 0)}/>
                </li>
            </ul>
        </div>
    );
};

export {Filter};
