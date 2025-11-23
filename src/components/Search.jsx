import React from 'react';
import SearchInput from './SearchInput';
import './scss/search.scss';
import SearchLeft from './SearchLeft';
import { useSearchStore } from '../store/useSearchStore';
import SearchRight from './SearchRight';
import { useLocation } from 'react-router-dom';
import { useCrocsProductStore } from '../store/useCrocsProductStore';

const Search = ({ scrolled }) => {
    const { setSearchWord } = useCrocsProductStore();
    const { inputText, onInputText, onAddRecentSearches, searchOpen, onCloseSearch } =
        useSearchStore();

    const handleSearch = () => {
        if (!inputText.trim()) return; // 빈값 방지
        setSearchWord(inputText); // ProductListPage 필터용 상태 업데이트
        onAddRecentSearches(inputText); // 최근 검색어 저장
        onInputText(''); // 입력창 초기화
        onCloseSearch(); // 검색창 닫기
    };

    const location = useLocation();
    const isSubPage = location.pathname !== '/';

    return (
        <div
            className={`
                search_wrap
                ${searchOpen ? 'open' : ''}
                ${isSubPage ? 'subpage' : ''}
                ${scrolled ? 'scrolled' : ''}
            `}
        >
            <button className="close_btn" onClick={onCloseSearch}>
                <img src="/images/close_btn.svg" alt="close_btn" />
            </button>

            <div className="search_top">
                <SearchInput
                    inputText={inputText}
                    onChange={(e) => onInputText(e.target.value)}
                    onSearch={handleSearch}
                />
            </div>

            <div className="search_bottom">
                <div className="search_left">
                    <SearchLeft />
                </div>

                <div className="search_right">
                    <SearchRight />
                </div>
            </div>
        </div>
    );
};

export default Search;
