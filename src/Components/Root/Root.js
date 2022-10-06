import React from 'react';
import { Outlet } from 'react-router-dom/dist';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;