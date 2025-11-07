import React from 'react';
import MainSlider from '../components/MainSlider';
import TopPopup from '../components/TopPopup';
import Monthly from '../components/Monthly';

const Main = () => {
    return (
        <main>
            <MainSlider />
            <TopPopup />
            <div className="container">
                <Monthly />
            </div>
        </main>
    );
};

export default Main;
