import Container from '@/components/container'
import { Heading } from '@/components/heading'
import TipoProgramaCard from '@/components/tipo-programa-card'

const data = {
  titulo: 'Programas Destacados',
  descripcion:
    'Explora nuestra oferta académica de posgrado y encuentra el programa ideal para impulsar tu desarrollo profesional.',
}

const programas = [
  { nombre: 'Maestrías', slug: 'maestrias', imagenCard: '', cantidad: 4 },
  { nombre: 'Doctorados', slug: 'doctorados', imagenCard: '', cantidad: 4 },
  { nombre: 'Residentado Médico', slug: 'residentado-medico', imagenCard: '', cantidad: 4 },
  {
    nombre: 'Segundas Especialidades',
    slug: 'segundas-especialidades',
    imagenCard: '',
    cantidad: 4,
  },
]

export default function FeaturedPrograms() {
  return (
    <section>
      <Container className="py-16">
        <Heading titulo={data.titulo} descripcion={data.descripcion} />

        <div className="grid grid-cols-2 gap-3 sm:flex sm:h-112.5 sm:flex-row sm:items-stretch sm:gap-2">
          {programas.map((program, index) => (
            <TipoProgramaCard
              key={index}
              nombre={program.nombre}
              slug={program.slug}
              imagenCard={program.imagenCard}
              cantidad={program.cantidad}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
