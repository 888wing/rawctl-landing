import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface OrganicIconProps {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

// Renamed from DiamondIcon but keeping export name for backwards compatibility
export function DiamondIcon({ children, size = 'md', className = '' }: OrganicIconProps) {
  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
  }

  return (
    <motion.div
      className={`
        ${sizes[size]} rounded-2xl bg-primary/10 flex items-center justify-center
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-primary">
        {children}
      </div>
    </motion.div>
  )
}
