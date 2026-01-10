import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  variant?: 'default' | 'elevated' | 'outlined'
}

export function Card({
  children,
  className = '',
  hover = true,
  variant = 'default'
}: CardProps) {
  const variants = {
    default: 'bg-card border border-border/50',
    elevated: 'bg-card shadow-soft',
    outlined: 'bg-transparent border-2 border-border',
  }

  return (
    <motion.div
      className={`
        ${variants[variant]}
        rounded-2xl p-8
        ${hover ? 'transition-all duration-500 hover:-translate-y-1 hover:shadow-soft-lg' : ''}
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
