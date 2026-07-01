export interface Comunicado {
  slug: string
  titulo: string
  descripcion: string
  fecha: string
  categoria: 'Académico' | 'Admisión' | 'Investigación' | 'General'
  imagen?: string
  destacado?: boolean
}
