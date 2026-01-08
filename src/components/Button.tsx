import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
  href?: string
  target?: string
  onClick?: () => void
  className?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'default',
  href,
  target,
  onClick,
  className = ''
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 rounded-full'

  const sizes = {
    default: 'h-12 px-8 text-base',
    sm: 'h-10 px-6 text-sm',
    lg: 'h-14 px-10 text-lg',
  }

  const variants = {
    primary: 'bg-primary text-primary-foreground shadow-soft hover:shadow-[0_6px_24px_-4px_rgba(93,112,82,0.25)] hover:scale-105 active:scale-95',
    outline: 'border-2 border-secondary text-secondary hover:bg-secondary/10 hover:scale-105 active:scale-95',
    ghost: 'text-primary hover:bg-primary/10 hover:scale-105 active:scale-95',
  }

  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </Component>
  )
}
