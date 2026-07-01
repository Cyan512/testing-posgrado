import {
  CalendarDays,
  ClipboardList,
  Languages,
  Network,
  Signpost,
  type LucideIcon,
} from 'lucide-react'

interface Item {
  id: number
  titulo: string
  descripcion: string
  icono: LucideIcon
}

export const items: Item[] = [
  {
    id: 1,
    titulo: 'Reglamentos y Normas',
    descripcion:
      'Accede a la normativa vigente que regula los procesos académicos y administrativos de la Escuela de Posgrado.',
    icono: ClipboardList,
  },
  {
    id: 2,
    titulo: 'Trámites Académicos',
    descripcion:
      'Conoce los procedimientos para solicitudes de matrícula, convalidaciones, licencias y certificaciones académicas.',
    icono: Network,
  },
  {
    id: 3,
    titulo: 'Calendario Académico y de Pagos',
    descripcion:
      'Mantente al día con las fechas importantes del semestre: matrículas, evaluaciones, feriados y cronograma de pagos.',
    icono: CalendarDays,
  },
  {
    id: 4,
    titulo: 'Ruta del Graduado',
    descripcion:
      'Descubre los pasos y requisitos para la obtención del grado académico, desde la sustentación hasta la titulación.',
    icono: Signpost,
  },
  {
    id: 5,
    titulo: 'Acreditación del Idioma',
    descripcion:
      'Información sobre los exámenes de suficiencia y módulos de idiomas requeridos para la titulación y el posgrado.',
    icono: Languages,
  },
]
