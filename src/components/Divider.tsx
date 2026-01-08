export function Divider({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full max-w-xs mx-auto h-px bg-border/50 my-12 ${className}`} />
  )
}
