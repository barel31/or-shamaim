import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

export default function NavBar({ articles }) {
    const [toggle, setToggle] = useState(false);

    const nav = useNavigate();

    return (
        <div className='Navbar'>
            <motion.div animate={{ x: [100, 0], opacity: [0.5, 1] }}>
                <nav className='navbar-desk'>
                    <ul>
                        {articles.map((v, i) => (
                            <li
                                key={`nav-${i}`}
                                className='nav-btn btn-atom'
                                onClick={() => {
                                    nav(`/${v.route}`);
                                    setToggle(false);
                                }}>
                                {v.name}
                                <div className='dot' />
                            </li>
                        ))}
                    </ul>
                </nav>
            </motion.div>
            <nav className='navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div whileInView={{ x: [100, 0] }} transition={{ duration: 0.85, ease: 'easeInOut' }}>
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {articles.map((v, i) => (
                                <li
                                    key={i}
                                    onClick={() => {
                                        setToggle(false);
                                        nav(`/${v.route}`);
                                    }}>
                                    {v.name}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </nav>
        </div>
    );
}
