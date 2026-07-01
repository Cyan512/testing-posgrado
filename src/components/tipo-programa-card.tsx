import Link from 'next/link'

interface Props {
  nombre: string
  slug: string
  imagenCard: string
  cantidad: number
}

export default function TipoProgramaCard({ nombre, slug, imagenCard, cantidad }: Props) {
  const getProgramasTexto = (cantidad: number) => {
    if (cantidad === 0) return 'Ningún programa disponible'
    if (cantidad === 1) return '1 programa disponible'
    return `${cantidad} programas disponibles`
  }

  return (
    <Link
      key={nombre}
      href={slug}
      className="group relative aspect-3/4 overflow-hidden rounded-xl transition-all delay-75 duration-700 ease-in-out sm:aspect-auto sm:flex-1 sm:hover:flex-3"
    >
      <img
        src={imagenCard || '/bg/image/bg-programa.png'}
        alt={nombre}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/40 to-transparent" />

      <div className="relative flex h-full w-full flex-col items-start justify-end p-4 sm:p-6">
        <h3 className="text-sm font-light uppercase tracking-wide transition-all delay-75 duration-700 ease-in-out sm:[writing-mode:vertical-lr] sm:group-hover:[writing-mode:horizontal-tb] sm:text-xl sm:group-hover:text-2xl">
          {nombre}
        </h3>

        <p className="mt-1 text-xs font-light sm:mt-2 sm:text-sm sm:opacity-0 sm:group-hover:opacity-100 sm:transition-all sm:delay-75 sm:duration-700 sm:ease-in-out">
          {getProgramasTexto(cantidad)}
        </p>
      </div>
    </Link>
  )
}
