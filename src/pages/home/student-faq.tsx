import Container from '@/components/container'
import { Heading } from '@/components/heading'
import { items } from '@/data/student'

const data = {
  headign: {
    titulo: 'Información para el Estudiante',
  },
  descripcion:
    ' En esta sección encontrarás toda la información esencial para organizar y gestionar tu vida académica. Te recomendamos revisarla con frecuencia para estar al tanto de fechas importantes y procesos administrativos.',
  imagen: {
    src: 'https://res.cloudinary.com/ds0tjwccs/image/upload/v1779898732/Foto_91_1_dv4bmg_ab8885562b.png',
    alt: '',
  },
}

export default function StudentFAQ() {
  return (
    <section>
      <Container className="py-16">
        <Heading className="mb-0 lg:mb-12 lg:text-left" titulo={data.headign.titulo} />

        <div className="relative flex flex-col items-start gap-6 lg:flex-row">
          <div className="hidden lg:block lg:h-180 lg:w-[54%] lg:overflow-hidden lg:rounded-xl lg:bg-muted lg:shadow-sm">
            <img
              src={data.imagen.src}
              alt={data.imagen.alt}
              className="h-full w-full object-cover object-center grayscale-15 contrast-110"
            />
          </div>

          <div className="z-10 w-full rounded-lg lg:border lg:border-border bg-card mt-3 sm:p-8 lg:relative lg:-ml-24 lg:mt-16 lg:w-[53%] lg:p-10">
            <p className="mb-8 text-base font-light leading-relaxed">{data.descripcion}</p>

            <div className="space-y-6">
              {items.map((item) => {
                const Icon = item.icono
                return (
                  <div
                    key={item.id}
                    className="group flex items-center gap-4 rounded-lg transition-colors hover:bg-primary/5 -mx-2 px-2 py-1"
                  >
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md">
                      <Icon className="h-9 w-9" />
                    </div>
                    <div className="pt-0.5">
                      <h3 className="text-lg font-light uppercase tracking-wide">{item.titulo}</h3>
                      <p className="mt-1 text-sm font-light leading-relaxed">{item.descripcion}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
