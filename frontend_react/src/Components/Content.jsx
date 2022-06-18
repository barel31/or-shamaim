import React from 'react';
import { motion } from 'framer-motion';
import { PortableText } from '@portabletext/react';

export default function Content({ article }) {
    return (
        <div className='content'>
            <div>
                <motion.div
                    whileInView={{ y: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    dir='rtl'
                    className='content-paragraph'>

                    <PortableText value={article.body} />
                </motion.div>
                <motion.div
                    style={article.bubble ? {} : { display: 'none' }}
                    whileInView={{ x: [-100, 0], opacity: [0.5, 1] }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className='content-bubble'
                    dangerouslySetInnerHTML={{ __html: article.bubble }}
                />
            </div>

            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='btn-pay'>
                תשלמו
            </motion.button>
        </div>
    );
}
