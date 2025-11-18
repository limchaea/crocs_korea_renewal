import React from 'react';
import Title from '../components/Title';
import StoreLocator from '../components/StoreLocator';

const Store = () => {
    return (
        <div className="sub_page">
            <div className="inner">
                <Title title="Store" />
                <StoreLocator />
            </div>
        </div>
    );
};

export default Store;
