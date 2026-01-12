export function Divider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 py-6 ${className}`}>
      <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-border rounded-full" />
      <div className="w-2 h-2 rounded-full bg-secondary/50" />
      <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-border rounded-full" />
    </div>
  )
}
