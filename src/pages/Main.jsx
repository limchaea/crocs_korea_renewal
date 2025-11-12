import React from 'react';
import JibbitzCollaboSwiper from '../components/JibbitzCollaboSwiper';
import Join from './Join';
import { Link } from 'react-router-dom';
import MainSlider from '../components/MainSlider';
import TopPopup from '../components/TopPopup';
import Monthly from '../components/Monthly';
import MainCategory from '../components/MainCategory';
import MainInstagram from '../components/MainInstagram'; 

const Main = () => {
    return (
        <main>
            <MainSlider />
            <TopPopup />
            <MainCategory />
            <div className="container">
                <Link to="/join">join</Link>
                <JibbitzCollaboSwiper />
            </div>
            
            <div className="container">
                <Monthly />
            </div>
            <MainInstagram />
        </main>
    );
};

export default Main;
