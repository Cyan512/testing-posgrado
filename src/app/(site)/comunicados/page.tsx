import Container from '@/components/container'
import ComunicadoCard from '@/components/comunicado-card'
import HeroSection from '@/pages/hero-section'
import { comunicados } from '@/data/comunicados'

const comunicadosOrdenados = comunicados.sort(
  (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
)

export default function ComunicadosPage() {
  return (
    <>
      <HeroSection
        title="Comunicados"
        subtitle="Escuela de Posgrado"
        description="Infórmate sobre las últimas noticias, convocatorias, eventos y disposiciones de la Escuela de Posgrado de la UNSAAC."
        badges={[{ label: 'Información oficial' }, { label: 'Actualizado', variant: 'outline' }]}
      />
      <main className="pb-16 pt-6 sm:pt-8">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {comunicadosOrdenados.map((comunicado) => (
              <ComunicadoCard key={comunicado.slug} comunicado={comunicado} />
            ))}
          </div>
        </Container>
      </main>
    </>
  )
}
