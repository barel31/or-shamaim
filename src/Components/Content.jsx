import React from 'react';

export default function Content({ content }) {
    return (
        <div className='content'>
            <p className='content-paragraph'>{content}</p>
            <button type='button' className='btn-pay'>
                תשלמו
            </button>
        </div>
    );
}
