import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

export default function NavBar({ buttons, routes }) {
    const [toggle, setToggle] = useState(false);

    const nav = useNavigate();

    return (
        <div className='navbar-container'>
            <nav className='navbar-desk'>
                <ul>
                    {buttons.map((v, i) => (
                        <li
                            key={`nav-${i}`}
                            className='nav-btn btn-atom'
                            onClick={() => {
                                nav(`/${routes[i]}`);
                                setToggle(false);
                            }}>
                            {v}
                            <div className='dot'></div>
                        </li>
                    ))}
                </ul>
            </nav>

            <nav className='navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }}>
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {buttons.map((v, i) => (
                                <li
                                    key={v}
                                    onClick={() => {
                                        setToggle(false);
                                        nav(`/${routes[i]}`);
                                    }}>
                                    {v}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </nav>
        </div>
    );
}
