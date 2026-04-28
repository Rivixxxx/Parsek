"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap"

export function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    
    if (cursorRef.current) {
      gsap.set(cursorRef.current, { x: window.innerWidth / 2, y: window.innerHeight / 2 })
    }

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      })
    }

    const checkHover = () => {
      const hoveredElement = document.querySelector(":hover")
      if (
        hoveredElement && 
        (window.getComputedStyle(hoveredElement).cursor === "pointer" || 
         ["A", "BUTTON", "INPUT", "TEXTAREA"].includes(hoveredElement.tagName))
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mousemove", checkHover)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mousemove", checkHover)
    }
  }, [])

  if (!mounted) return null

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
      style={{ willChange: "transform" }}
    >
      <motion.div
        animate={{
          width: isHovering ? 64 : 32,
          height: isHovering ? 64 : 32,
          x: "-50%",
          y: "-50%"
        }}
        className="rounded-full border-2 border-primary flex items-center justify-center bg-primary/5 transition-colors"
      >
         <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(34,211,238,1)]" />
      </motion.div>
    </div>
  )
}