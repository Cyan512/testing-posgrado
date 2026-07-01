import Container from '@/components/container'
import { Quote } from 'lucide-react'
import Image from 'next/image'

const data = {
  imagen: {
    src: 'https://res.cloudinary.com/ds0tjwccs/image/upload/v1780310337/director-posgrado_kwfzqm.jpg',
    alt: 'Dr. Eleazar Crucinta Ugarte, Rector de la UNSAAC',
  },
  titulo: 'La educación es el arma más poderosa que puedes usar para cambiar el mundo',
  mensaje:
    'Desde 1984, nos hemos dedicado a una misión singular: dotar a la próxima generación de las habilidades de pensamiento crítico necesarias para desenvolverse en un mundo complejo. La Escuela de Posgrado de la Universidad Nacional de San Antonio Abad del Cusco no es solo una universidad, es un crisol para el cambio.',
  director: {
    nombre: 'Dr. Pepito W. Hamilton',
    cargo: 'Director de la Escuela de Posgrado',
  },
}

export default function RectorMessage() {
  return (
    <section>
      <Container className="py-16 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="relative flex justify-center lg:col-span-5 lg:justify-start">
            <div className="relative z-10 aspect-3/4 w-full max-w-sm overflow-hidden shadow-sm">
              <Image
                src={data.imagen.src}
                alt={data.imagen.alt}
                fill
                sizes="(max-width: 384px) 100vw, 384px"
                priority={false}
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center lg:col-span-7">
            <h2 className="text-3xl font-light uppercase tracking-wide sm:text-4xl">{data.titulo}</h2>
            <div className="relative mt-8">
              <Quote className="absolute -left-2 top-0 h-8 w-8 rotate-180" />
              <blockquote className="space-y-6 pl-8 text-base font-light leading-relaxed">
                <p className="relative">
                  {data.mensaje}
                  <Quote className="inline-block h-8 w-8 align-middle ml-1 -mt-2" />
                </p>
              </blockquote>
            </div>
            <div className="mt-8 border-l-2 pl-8">
              <div className="text-lg font-light">{data.director.nombre}</div>
              <div className="mt-1 text-xs font-light uppercase tracking-widest">
                {data.director.cargo}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
