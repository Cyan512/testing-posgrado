import Container from '@/components/container'
import ProgramFilters from '@/components/program-filters'
import ProgramaCard from '@/components/programa-card'
import HeroSection from '@/pages/hero-section'

export default function TipoProgramaPage() {
  return (
    <>
      <HeroSection
        title="Maestrías"
        subtitle="Programas de Posgrado"
        description="Explora nuestras maestrías diseñadas para potenciar tu desarrollo profesional y académico."
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
        alt="Maestrías"
        badges={[{ label: 'Posgrado' }, { label: 'Admisión 2026', variant: 'outline' }]}
        action={{
          label: 'Ver programas',
          to: '/programas/maestrias',
        }}
      />
      <main className="pb-16 pt-6 sm:pt-8 ">
        <Container>
          <ProgramFilters />
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <ProgramaCard key={index} />
            ))}
          </div>
        </Container>
      </main>
    </>
  )
}
