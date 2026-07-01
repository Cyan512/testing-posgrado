import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Container from '@/components/container'

interface BadgeItem {
  label: string
  variant?: 'default' | 'outline'
}

interface PageHeroAction {
  label: string
  to: string
}

interface PageHeroProps {
  title: string
  subtitle?: string
  description?: string
  image?: string
  alt?: string
  badges?: BadgeItem[]
  action?: PageHeroAction
}

export default function HeroSection({
  title,
  subtitle,
  description,
  image,
  alt,
  badges,
  action,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[50vh] flex-col justify-center overflow-hidden py-24 sm:py-32">
      <img src={image} alt={alt ?? ''} className="absolute inset-0 h-full w-full object-cover" />
      <Container className="relative z-10">
        <div className="max-w-3xl text-center lg:text-left">
          {badges && badges.length > 0 && (
            <div className="mb-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              {badges.map((badge, i) => (
                <Badge
                  key={i}
                  className={
                    badge.variant === 'outline'
                      ? 'text-xs uppercase tracking-widest'
                      : 'text-xs uppercase tracking-widest'
                  }
                  variant={badge.variant === 'outline' ? 'outline' : 'default'}
                >
                  {badge.label}
                </Badge>
              ))}
            </div>
          )}
          <h1 className="font-light uppercase tracking-wide text-4xl sm:text-5xl">{title}</h1>
          {subtitle && <p className="mt-3 text-base font-light leading-relaxed">{subtitle}</p>}
          {description && (
            <p className="mt-4 text-base font-light leading-relaxed">{description}</p>
          )}
          {action && (
            <div className="mt-8 flex justify-center gap-4 lg:justify-start">
              <Button asChild size="lg" className="text-sm font-normal tracking-widest">
                <Link href={action.to}>
                  {action.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
