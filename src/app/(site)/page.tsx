import AdmissionCTA from '@/pages/home/admission-cta'
import FeaturedPrograms from '@/pages/home/featured-programs'
import Hero from '@/pages/home/hero'
import LatestComunicados from '@/pages/home/latest-comunicados'
import RectorMessage from '@/pages/home/rector-message'
import StudentFAQ from '@/pages/home/student-faq'

export default function HomePage() {
  return (
    <>
      <Hero />
      <RectorMessage />
      <AdmissionCTA />
      <LatestComunicados />
      <FeaturedPrograms />
      <StudentFAQ />
    </>
  )
}
