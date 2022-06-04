import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ipsums } from './Contents';

import './styles/App.css';
import './styles/clouds.css';
import './styles/buttons.css';

import Content from './Components/Content';
import NavBar from './Components/NavBar';

const pages = [
    {
        route: 'birth',
        // route: '', // homepage
        title: 'קריאת מפת לידה',
        content: ipsums[0],
    },
    { route: 'hand', title: 'קריאת כף יד', content: ipsums[1] },
    { route: 'quality', title: 'חיי איכות', content: ipsums[2] },
    { route: 'prays', title: 'תפילות וסגולות', content: ipsums[3] },
    { route: 'legendery', title: 'נדירים', content: ipsums[4] },
    { route: 'about', title: 'אודות', content: ipsums[5] },
];
pages.titles = () => pages.map((v) => v.title);
pages.routes = () => pages.map((v) => v.route);

export default function App() {
    return (
        <div className='App'>
            <div id='background-wrap'>
                <div className='x1'>
                    <div className='cloud'></div>
                </div>
                <div className='x2'>
                    <div className='cloud'></div>
                </div>
                <div className='x3'>
                    <div className='cloud'></div>
                </div>
                <div className='x4'>
                    <div className='cloud'></div>
                </div>
                <div className='x5'>
                    <div className='cloud'></div>
                </div>
            </div>
            <h1 className='title font'>אור השמיים</h1>
            <div className='container'>
                <Routes>
                    {/* default routes */}
                    <Route path={`/`} element={<Content content={pages[0].content} />} />
                    {pages.map((v, i) => (
                        <Route key={i} path={`/${v.route}`} element={<Content content={v.content} />} />
                    ))}
                </Routes>
                <NavBar buttons={pages.titles()} routes={pages.routes()} />
            </div>
            <footer className='font'>Made with React by Barel Shraga ©</footer>
        </div>
    );
}
