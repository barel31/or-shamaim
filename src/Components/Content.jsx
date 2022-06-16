import React from 'react';
import { motion } from 'framer-motion';

export default function Content({ content }) {
    return (
        <div className='content'>
            <div>
                <motion.p
                    whileInView={{ y: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    dir='rtl'
                    className='content-paragraph'
                    dangerouslySetInnerHTML={{ __html: content.content || content }}
                />
                <motion.div
                    style={content.bubble ? {} : { display: 'none' }}
                    whileInView={{ x: [-100, 0], opacity: [0.5, 1] }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className='content-bubble'
                    dangerouslySetInnerHTML={{ __html: content.bubble }}
                />
            </div>

            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='btn-pay'>
                תשלמו
            </motion.button>
        </div>
    );
}
