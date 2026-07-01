import { notFound } from 'next/navigation'
import Image from 'next/image'
import Container from '@/components/container'
import HeroSection from '@/pages/hero-section'
import { comunicados } from '@/data/comunicados'

function formatearFecha(fecha: string) {
  return new Intl.DateTimeFormat('es-PE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(fecha + 'T00:00:00'))
}

export default function ComunicadoDetalle({ params }: { params: { slug: string } }) {
  const { slug } = params
  const comunicado = comunicados.find((c) => c.slug === slug)

  if (!comunicado) {
    notFound()
  }

  return (
    <>
      <HeroSection
        title={comunicado.titulo}
        description={comunicado.descripcion}
        badges={[{ label: comunicado.categoria }, { label: 'Comunicado', variant: 'outline' }]}
        image={comunicado.imagen}
        alt={comunicado.titulo}
      />
      <main className="pb-16 pt-6 sm:pt-8">
        <Container>
          <article className="mx-auto max-w-3xl">
            <div className="flex items-center gap-4 text-sm font-light text-muted-foreground">
              <time dateTime={comunicado.fecha}>{formatearFecha(comunicado.fecha)}</time>
            </div>
            {comunicado.imagen && (
              <figure className="mt-8 overflow-hidden rounded-xl">
                <Image
                  src={comunicado.imagen}
                  alt={comunicado.titulo}
                  width={800}
                  height={450}
                  className="w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </figure>
            )}
            <div className="mt-8 space-y-6 text-base font-light leading-relaxed">
              <p>{comunicado.descripcion}</p>
            </div>
          </article>
        </Container>
      </main>
    </>
  )
}
