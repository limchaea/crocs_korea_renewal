import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainmenuList from './MainmenuList';
import './scss/header.scss';
import GnbWrap from './GnbWrap';
import Depth1 from './Depth1';
import Search from './Search';
import { useSearchStore } from '../store/useSearchStore';

const Header = () => {
    const searchOpen = useSearchStore((state) => state.searchOpen);
    const onOpenSearch = useSearchStore((state) => state.onOpenSearch);
    const onCloseSearch = useSearchStore((state) => state.onCloseSearch);

    const [depthOpen, setDepthOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false); // <- 스크롤 상태

    useEffect(() => {
        const handleScroll = () => {
            const slider = document.querySelector('.main_slider_wrap'); // 슬라이더 래퍼 클래스
            if (slider) {
                const sliderHeight = slider.offsetHeight;
                if (window.scrollY > sliderHeight) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* header와 depth1을 감싸는 wrapper */}
            <div
                className={`header_wrapper ${depthOpen ? 'open' : ''} ${searchOpen ? 'hide' : ''} ${
                    scrolled ? 'scrolled' : ''
                }`}
                onMouseEnter={() => setDepthOpen(true)}
                onMouseLeave={() => setDepthOpen(false)}
            >
                <header className="header">
                    <div className="wide_inner">
                        <div className="header_left">
                            <h1 className="logo">
                                <Link to="/">
                                    <img src="./images/crocs_logo.svg" alt="crocs logo" />
                                </Link>
                            </h1>
                            <nav>
                                <MainmenuList />
                            </nav>
                        </div>
                        <div className="header_right">
                            <GnbWrap onSearchClick={onOpenSearch} />
                        </div>
                    </div>
                </header>

                {depthOpen && <Depth1 />}
            </div>

            {searchOpen && <Search onClose={onCloseSearch} />}
        </>
    );
};

export default Header;
