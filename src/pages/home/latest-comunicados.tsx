import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Container from '@/components/container'
import { Heading } from '@/components/heading'
import ComunicadoCard from '@/components/comunicado-card'
import { comunicados } from '@/data/comunicados'
import { ROUTES } from '@/routes'

const data = {
  titulo: 'Últimos Comunicados',
  descripcion:
    'Mantente informado sobre las últimas novedades, convocatorias y eventos de la Escuela de Posgrado.',
}

const ultimosComunicados = comunicados
  .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
  .slice(0, 3)

export default function LatestComunicados() {
  return (
    <section>
      <Container className="py-16">
        <Heading titulo={data.titulo} descripcion={data.descripcion} />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ultimosComunicados.map((comunicado) => (
            <ComunicadoCard key={comunicado.slug} comunicado={comunicado} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" className="text-sm font-normal tracking-widest">
            <Link href={ROUTES.COMUNICADOS}>
              Ver todos los comunicados
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
