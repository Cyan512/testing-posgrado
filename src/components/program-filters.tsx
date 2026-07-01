'use client'

import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function ProgramFilters() {
  return (
    <div className="rounded-xl border border-primary/10 bg-card p-4 shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2" />
          <Input className="pl-8" />
        </div>
        <div className="flex gap-2">
          <Button className="flex-1 text-sm font-normal tracking-widest">Aplicar filtros</Button>
          <Button className="size-8 shrink-0" variant="ghost" size="icon">
            <X className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
