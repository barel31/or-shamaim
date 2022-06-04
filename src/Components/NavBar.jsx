import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavBar({ buttons, routes }) {
    const nav = useNavigate();

    return (
        <div className='nav-bar'>
            {buttons.map((v, i) => (
                <button key={i} className='nav-btn btn-atom' onClick={() => nav(`/${routes[i]}`)}>
                    {v}
                    <div className='dot'></div>
                </button>
            ))}
        </div>
    );
}
