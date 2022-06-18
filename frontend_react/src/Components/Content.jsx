import React from 'react';
import { motion } from 'framer-motion';

export default function Content({ article }) {
    const setStyle = (marks) => {
        const style = {};
        marks.forEach((mark) => {
            switch (mark) {
                case 'strong':
                    style.fontWeight = 'bold';
                    break;

                case 'underline':
                    style.textDecoration = mark;
                    break;

                default:
                    break;
            }
        });
        return style;
    };

    return (
        <div className='content'>
            <div>
                <motion.div
                    whileInView={{ y: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    dir='rtl'
                    className='content-paragraph'>
                    {article !== undefined &&
                        article.body.map((v) => {
                            return v.children.map((child, i) => {
                                // child.text.replace(/\n/g, '<br />');
                                return (
                                    <div key={`div-${i}`}>
                                        <p style={setStyle(child.marks)}>{child.text}</p>
                                        {<br />}
                                    </div>
                                );
                            });
                        })}
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
