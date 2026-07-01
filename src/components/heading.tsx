import { cn } from '@/lib/utils'

interface Props {
  titulo: string
  descripcion?: string
  className?: string
  align?: 'left' | 'center' | 'right'
}

const alignClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
} as const

export function Heading({ titulo, descripcion, className, align = 'center' }: Props) {
  return (
    <div className={cn('w-full mb-12', alignClasses[align], className)}>
      <h2 className="font-light uppercase tracking-wide text-3xl sm:text-4xl">{titulo}</h2>
      {descripcion && <p className="mt-3 text-base font-light leading-relaxed">{descripcion}</p>}
    </div>
  )
}
