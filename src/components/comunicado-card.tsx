import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Comunicado } from '@/models/comunicado'
import { comunicadoDetalle } from '@/routes'

function formatearFecha(fecha: string) {
  return new Intl.DateTimeFormat('es-PE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(fecha + 'T00:00:00'))
}

export default function ComunicadoCard({ comunicado }: { comunicado: Comunicado }) {
  const { slug, titulo, descripcion, fecha, categoria, imagen } = comunicado

  return (
    <Link href={comunicadoDetalle(slug)}>
      <Card className="group h-full overflow-hidden pt-0 transition-shadow hover:ring-2 hover:ring-primary/20">
        {imagen ? (
          <AspectRatio ratio={16 / 9} className="relative overflow-hidden">
            <Image
              src={imagen}
              alt={titulo}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <Badge className="absolute left-3 top-3 z-10 text-xs tracking-widest">
              {categoria}
            </Badge>
          </AspectRatio>
        ) : (
          <div className="relative bg-muted px-6 pt-10 pb-6">
            <Badge className="text-xs tracking-widest">{categoria}</Badge>
          </div>
        )}
        <CardHeader>
          <div className="flex items-center gap-2 text-xs font-light text-muted-foreground">
            <time dateTime={fecha}>{formatearFecha(fecha)}</time>
          </div>
          <CardTitle className="text-lg font-light uppercase tracking-wide line-clamp-2">
            {titulo}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm font-light leading-relaxed text-muted-foreground line-clamp-3">
            {descripcion}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}
