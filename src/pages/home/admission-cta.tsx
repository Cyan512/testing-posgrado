import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { ROUTES } from '@/routes'
import Container from '@/components/container'

const data = {
  titulo: '¿Listo para Trascender en tu Carrera?',
  descripcion:
    'Únete a la élite académica del Cusco y transforma tu potencial en resultados extraordinarios con nuestra formación de prestigio internacional.',

  boton: {
    texto: 'Inscribirme ahora',
    link: ROUTES.PROCESO_ADMISION,
  },
}

export default function AdmissionCTA() {
  return (
    <section>
      <Container className="py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-light uppercase tracking-wide text-3xl sm:text-4xl">{data.titulo}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base font-light leading-relaxed">
            {data.descripcion}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="text-sm font-normal tracking-widest">
              <Link href={data.boton.link}>
                {data.boton.texto}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
