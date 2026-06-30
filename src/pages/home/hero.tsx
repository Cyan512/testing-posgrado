import { ROUTES } from "@/app/routes";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const data = {
  imagen: "",
  titulo: "Escuela de Posgrado",
  subtitulo: "Universidad Nacional de San Antonio Abad del Cusco",
  descripcion: "Formamos líderes e investigadores comprometidos con el desarrollo científico, tecnológico y humanístico de la región y el país, a través de programas académicos de excelencia.",
  button: {
    texto: "Ver comunicados",
    link: ROUTES.COMUNICADOS
  }
}

export default function Hero() {
  return (
    <section className="">
      <Container className="relative z-20 px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div>
          <div>
            <span>{data.subtitulo}</span>
            <h1 className="font-light uppercase tracking-wide text-4xl sm:text-5xl lg:text-6xl">{data.titulo}</h1>
            <p className="mt-6 text-base font-light leading-relaxed">{data.descripcion}</p>
            <div className="mt-10 flex gap-4 justify-center lg:justify-start">
              <Button asChild>
                <Link href={data.button.link}>
                  {data.button.texto}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
