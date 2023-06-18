'use client'

import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function Cursor() {

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        document.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor)
        }
    }, [])

  return (
    <motion.div 
        id="cursor" 
        className="w-5 h-5 fixed z-[999] bg-white rounded-full mix-blend-difference pointer-events-none" 
        style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
        }}
    />
  )
}
