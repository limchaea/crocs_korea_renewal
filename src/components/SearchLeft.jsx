import React from 'react';
import { useSearchStore } from '../store/useSearchStore';

const SearchLeft = () => {
    const { recentSearches } = useSearchStore();

    return (
        <>
            <div className="recent_searches_wrap">
                <h4 className="recent_search">Recent Searches</h4>
                <div className="recent_search_list">
                    {recentSearches.map((search) => (
                        <li key={search.id}>{search.inputText}</li>
                    ))}
                </div>
            </div>

            <div className="hashtag_wrap">
                <h4 className="hashtag"># HASHTAG</h4>
                <div className="hahtag_list"></div>
            </div>
        </>
    );
};

export default SearchLeft;
