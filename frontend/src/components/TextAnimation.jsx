// import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import React from 'react';

function TextAnimation(text) {

    return <motion.div


        initial={{ width: 0 }}
        style={{ overflow: "hidden", whiteSpace: "nowrap", display: "inline-block", fontFamily: "poppins" }}
        animate={{ width: "100%" }}
        exit={{ width: 0 }}

        transition={{ duration: 4, ease: "easeInOut", delay: 0.2 }}
        // style={{ fontFamily: "sans-serif" }}
        className="border-2 color-white-100 font-semibold text-3xl text-center p-5 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"

    >{text.text}</motion.div>



}

export default TextAnimation;