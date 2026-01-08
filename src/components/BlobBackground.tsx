import { motion } from 'framer-motion'

interface BlobBackgroundProps {
    className?: string
    shapeIndex?: number // 0-3 to select different blob shapes
    color?: string // Tailwind color class, e.g., 'bg-primary/20'
}

export function BlobBackground({
    className = '',
    shapeIndex = 0,
    color = 'bg-primary/5'
}: BlobBackgroundProps) {

    // Organic blob shapes using complex border-radius
    const shapes = [
        '60% 40% 30% 70% / 60% 30% 70% 40%',
        '30% 70% 70% 30% / 30% 30% 70% 70%',
        '50% 50% 20% 80% / 25% 80% 20% 75%',
        '40% 60% 70% 30% / 40% 50% 60% 50%'
    ]

    const selectedShape = shapes[shapeIndex % shapes.length]

    return (
        <motion.div
            className={`absolute -z-10 pointer-events-none blur-3xl ${color} ${className}`}
            style={{
                borderRadius: selectedShape
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
            }}
            transition={{
                duration: 10 + shapeIndex * 2, // Varied duration for natural feel
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }}
        />
    )
}
