import React from 'react';
import {SneakersList} from "../SneakersList";
import {useAppDispatch, useAppSelector} from "../../hook/redux";
import {sneakersActions} from "../../redux";
import {Filter} from "../Filter";
import {createID} from "../../hook/createID";

const Sneakers: React.FC = () => {
    const [isActive, setIsActive] = React.useState<boolean>(false);

    const [query, setQuery] = React.useState<string>('');

    const [selectMethod, setSelectMethod] = React.useState<string>('alphabetic');

    const {sortMethods} = useAppSelector(state => state.sneakersReducer);
    const dispatch = useAppDispatch();

    const search = async (e: string) => {
        await setQuery(e);
        dispatch(sneakersActions.searchSneakers(e))
    }

    React.useEffect(() => {
        dispatch(sneakersActions.selectMethod(selectMethod));
        dispatch(sneakersActions.sort());
    }, [dispatch,selectMethod])

    return (
        <section className="sneakers">
            <div className="sneakers_top">
                <div className="sneakers_top_title">
                    <h2>All sneakers</h2>
                    <div className="right_section">
                        <h3 className={isActive ? '_active' : ''}
                            onClick={() => setIsActive(!isActive)}>Filter</h3>
                        <div className="sort">
                            Sort by |<span className="by">{selectMethod}</span>|
                            <ul className="sort_popup">
                                {sortMethods && sortMethods
                                    .map((method,) =>
                                        <li key={createID()} onClick={() => setSelectMethod(method)}>{method}</li>
                                    )
                                }
                            </ul>
                        </div>

                        <label className="search">
                            <svg className="search_btn" onClick={() => dispatch(sneakersActions.searchSneakers(query))}
                                 width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
                                    stroke="#E4E4E4" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            <input type="text" placeholder="Text" onChange={(e) => search(e.target.value)}/>
                        </label>
                    </div>
                </div>
                <Filter isActive={isActive}/>
            </div>
            <SneakersList/>
        </section>
    );
};

export {Sneakers};
