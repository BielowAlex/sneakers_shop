import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {useAppSelector} from "../../hook/redux";
import {Poster} from "../Poster";

const Slider: React.FC = () => {
    const [count, setCount] = React.useState<number>(0);
    const [isActive, setIsActive] = React.useState<boolean>(true);

    const {posterList} = useAppSelector(state => state.sneakersReducer);

    const swipeLeft = () => {
        setCount(count + 990);
    }
    const swipeRight = () => {
        setCount(count - 990);
    }
    const setSlide = (num: number) => {
        setCount(num);
    }

    React.useEffect(() => {
        if (count === posterList.length * 990) {
            setCount(0)
        }
        if (count < 0) {
            setCount((posterList.length-1)*990);
        }
    }, [count,posterList.length]);

    React.useEffect(() => {
        if (isActive) {
            const startSwap = setTimeout(() => {
                setCount(count + 990);
            }, 4000);
            return () => clearTimeout(startSwap);
        }
    }, [isActive, count]);

    return (
        <div className="slider" onMouseOver={() => setIsActive(false)} onMouseLeave={() => setIsActive(true)}>
            <div className="slider_top">
                <FontAwesomeIcon icon={faChevronLeft} onClick={swipeRight}/>
                <div className="slider_window">
                    <div className="slider_list" style={{
                        right: count,
                        transition: count === posterList.length * 990 ? 'all 0.1s ease' : 'all 0.8s ease'
                    }}>
                        {posterList && posterList.map(poster => <Poster poster={poster} key={poster.id.toString()}
                                                                        count={count}/>)}
                    </div>
                </div>
                <FontAwesomeIcon icon={faChevronRight} onClick={swipeLeft}/>
            </div>
            <div className="slider_bottom">
                <span className={`slide_line ${count === 0 ? '_active' : ''}`} onClick={() => setSlide(0)}/>
                <span className={`slide_line ${count === 990 ? '_active' : ''}`} onClick={() => setSlide(990)}/>
                <span className={`slide_line ${count === 1980 ? '_active' : ''}`} onClick={() => setSlide(1980)}/>
                <span className={`slide_line ${count === 2970 ? '_active' : ''}`} onClick={() => setSlide(2970)}/>
                <span className={`slide_line ${count === 3960 ? '_active' : ''}`} onClick={() => setSlide(3960)}/>
                <span className={`slide_line ${count === 4950 ? '_active' : ''}`} onClick={() => setSlide(4950)}/>
            </div>
        </div>
    );
};

export {Slider};
