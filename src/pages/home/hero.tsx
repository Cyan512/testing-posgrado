import { ROUTES } from '@/app/routes'
import Container from '@/components/container'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const data = {
  imagen:
    'https://res.cloudinary.com/ds0tjwccs/image/upload/v1779898732/Foto_91_1_dv4bmg_ab8885562b.png',
  titulo: 'Escuela de Posgrado',
  subtitulo: 'Universidad Nacional de San Antonio Abad del Cusco',
  descripcion:
    'Formamos líderes e investigadores comprometidos con el desarrollo científico, tecnológico y humanístico de la región y el país, a través de programas académicos de excelencia.',
  button: {
    texto: 'Ver comunicados',
    link: ROUTES.COMUNICADOS,
  },
}

export default function Hero() {
  return (
    <section className="relative flex flex-col min-h-screen justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src={data.imagen} alt="" fill className="object-cover" />
      </div>
      <Container className="relative z-20 w-full px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="relative mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
          <h1 className="uppercase tracking-wide text-4xl sm:text-5xl lg:text-6xl">
            {data.titulo}
            <span className="mt-3 block font-sans text-base font-light leading-relaxed">
              {data.subtitulo}
            </span>
          </h1>
          <p className="mt-6 text-base font-light leading-relaxed">{data.descripcion}</p>
          <div className="mt-10 flex gap-4 justify-center lg:justify-start">
            <Button size="lg" asChild>
              <Link href={data.button.link} className="text-sm font-normal tracking-widest">
                {data.button.texto}
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
