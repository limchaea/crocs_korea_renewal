import React from 'react';
import { Link } from 'react-router-dom';
import './scss/comeAsBtn.scss';

const ComeAsPopupBtn = () => {
    return (
        <>
            <div className="come_as_btn">
                <button>Come As You Are</button>
                {/* <Link to="/comaspopup">Come As You Are</Link> */}
            </div>
            <div className="come_as_btn">
                <Link to="/comaspopup">Come As You Are</Link>
            </div>
        </>
    );
};

export default ComeAsPopupBtn;
