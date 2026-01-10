import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  target?: string
  onClick?: () => void
  className?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  target,
  onClick,
  className = ''
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-body font-semibold transition-all duration-300 rounded-full'

  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-base',
    lg: 'px-9 py-4 text-lg',
  }

  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-soft hover:shadow-float hover:-translate-y-0.5',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
    ghost: 'text-primary hover:bg-primary/10',
  }

  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </Component>
  )
}
