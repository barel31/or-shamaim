import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ipsums, contents } from './Contents';
import { motion } from 'framer-motion';

import './styles/App.scss';
import './styles/clouds.css';
import './styles/buttons.css';

import Content from './Components/Content';
import NavBar from './Components/NavBar';
import Calculator from './Components/Calculator';
import SocialMedia from './Components/SocialMedia';

const pages = [
    { route: 'birth', title: 'קריאת מפת לידה', content: contents[0] },
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
            <motion.h1
                whileInView={{ y: [-50, 0], opacity: [0.5, 1] }}
                whileHover={{ scale: 1.25 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className='title font'>
                אור השמיים
            </motion.h1>

            <div className='container'>
                <Routes>
                    {/* default route */}
                    <Route path={`/`} element={<Content content={pages[0].content} />} />
                    {pages.map((v, i) => (
                        <Route key={i} path={`/${v.route}`} element={<Content content={v.content} />} />
                    ))}
                </Routes>
                <NavBar buttons={pages.titles()} routes={pages.routes()} />
            </div>
            <footer className='font'>Made with React by Barel Shraga ©</footer>
            <Calculator />
            <SocialMedia />
        </div>
    );
}
