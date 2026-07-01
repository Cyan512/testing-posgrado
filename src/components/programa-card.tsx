import Image from 'next/image'
import Link from 'next/link'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function ProgramaCard() {
  return (
    <Link href="#">
      <Card className="group h-full overflow-hidden pt-0">
        <AspectRatio ratio={16 / 9} className="relative overflow-hidden">
          <Image
            src="https://res.cloudinary.com/ds0tjwccs/image/upload/v1779898731/large_Whats_App_Image_2024_01_24_at_10_38_22_AM_13_1_p3eu3c_569c0d75fb.png"
            alt="Maestría en Gestión Pública"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />

          <Badge className="absolute left-1/2 top-3 z-10 -translate-x-1/2 text-xs tracking-widest">
            En convocatoria
          </Badge>
        </AspectRatio>

        <CardHeader>
          <CardTitle className="text-lg font-light uppercase tracking-wide">
            Maestría en Gestión Pública
          </CardTitle>
        </CardHeader>
      </Card>
    </Link>
  )
}
