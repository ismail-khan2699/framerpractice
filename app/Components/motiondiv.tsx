'use client'
import { motion, AnimatePresence } from 'framer-motion'
import React, { ReactNode } from 'react'

interface MotiondivProps {
  children: ReactNode
}

const Motiondiv: React.FC<MotiondivProps> = ({ children}) => {
  return (
     
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default Motiondiv
