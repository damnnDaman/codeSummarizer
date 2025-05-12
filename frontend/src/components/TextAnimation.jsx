// import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import React from 'react';

function TextAnimation(text) {
    //    
    console.log(text)
    return <motion.div


        initial={{ width: 0 }}
        style={{ overflow: "hidden", whiteSpace: "nowrap", display: "inline-block", fontFamily: "poppins" }}
        animate={{ width: "100%" }}
        exit={{ width: 0 }}

        transition={{ duration: 4, ease: "easeInOut", delay: 0.2 }}
        // style={{ fontFamily: "sans-serif" }}
        className="border-2 color-white-100 font-semibold text-3xl text-center p-5 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"

    >{text.text}</motion.div>






    // 
    // 
    // 
    // const [displayedText, setDisplayedText] = useState('');
    //   const [index, setIndex] = useState(0);

    //   useEffect(() => {
    //     if (index < text.length) {
    //       const timeoutId = setTimeout(() => {
    //         setDisplayedText((prevText) => prevText + text[index]);
    //         setIndex((prevIndex) => prevIndex + 1);
    //       }, delay);

    //       return () => clearTimeout(timeoutId);
    //     }
    //   }, [index, text, delay]);

    //   return <span>{displayedText}</span>;

}

export default TextAnimation;