import React, { useEffect, useState } from "react";
import JibbitzCollaboSwiper from "../components/JibbitzCollaboSwiper";
import MainSlider from "../components/MainSlider";
import TopPopup from "../components/TopPopup";
import Monthly from "../components/Monthly";
import MainCategory from "../components/MainCategory";
import MainInstagram from "../components/MainInstagram";
import SlideCircle from "../components/SlideCircle";
import CrocsSection from "../components/CrocsSectionFinal";
import FullPageScroll from "../components/FullPageScroll";
import Footer from "../components/Footer";
import ComeAsPopupBtn from '../components/ComeAsPopupBtn';
import ComeAsPopup from '../components/ComeAsPopup';

const Main = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(true); // 페이지 진입 시 모달 노출
    const [isBtnVisible, setIsBtnVisible] = useState(false); // 모달 닫으면 버튼 표시
    const [showBtn, setShowBtn] = useState(false); // 배너 아래에서만 버튼 표시

    useEffect(() => {
        const handleScroll = () => {
            const bannerHeight = document.querySelector('.main_slider')?.offsetHeight || 0;
            if (window.scrollY > bannerHeight) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setIsBtnVisible(true);
    };

    const [currentSection, setCurrentSection] = useState(0);

    // Main컴포넌트 안에서만 스크롤 제거
    useEffect(() => {
        document.body.classList.add("no-scroll");
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, []);

    const handleSectionChange = (index, element) => {
        // data-section-id로 섹션 구분
        const sectionId = element?.getAttribute("data-section-id");
        setCurrentSection(sectionId);
    };

    return (
        <main>
            <FullPageScroll onSectionChange={handleSectionChange}>
                <section data-section-id='main-slider'>
                    <MainSlider />
                    <TopPopup />
                </section>
                <section data-section-id='main-category'>
                    <MainCategory />
                </section>
                <section data-section-id='slide-circle' className='showDot'>
                    <SlideCircle showDot={currentSection === "slide-circle"} />
                </section>
                <section data-section-id='jibbitz'>
                    <JibbitzCollaboSwiper />
                </section>
                <section data-section-id='crocs'>
                    <CrocsSection />
                </section>
                <section data-section-id='monthly'>
                    <Monthly />
                </section>
                <section data-section-id='instagram'>
                    <MainInstagram />
                </section>
                <Footer />
            </FullPageScroll>
            {/* 팝업창 */}
            {isPopupOpen && <ComeAsPopup onClose={handleClosePopup} />}
            {isBtnVisible && showBtn && <ComeAsPopupBtn onOpen={() => setIsPopupOpen(true)} />}
        </main>
    );
};

export default Main;
