'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Search } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { LINKS } from '@/data/links'

interface Link {
    num: string
    label: string
    href: string
}

interface PanelData {
    id: number
    subtitle: string
    title: string
    bgImage?: string
    links: Link[]
}

interface PanelProps {
    open: boolean
    className?: string
    index: number
    onClose: () => void
    data: PanelData
    children?: React.ReactNode
}

function Panel({ open, className, index, onClose, data, children }: PanelProps) {
    return (
        <div
            className={cn(
                'relative flex h-full flex-col justify-end overflow-hidden bg-primary px-4 pb-8 pt-20 text-white transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.18,1)] sm:px-6 md:px-8',
                className,
                open ? 'translate-y-0' : '-translate-y-full'
            )}
            style={{ transitionDelay: `${index * 75}ms` }}
        >
            <Image
                src={data.bgImage || ''}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                priority={open}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/80 to-black/60" />

            <div className="relative z-10">
                <div className="mb-8">
                    <p className="mb-2 text-xs uppercase tracking-widest text-white/60">{data.subtitle}</p>
                    <h2 className="text-4xl font-light leading-tight tracking-wide whitespace-pre-line text-white">
                        {data.title}
                    </h2>
                </div>
                <div className="h-px bg-white/10 mb-4" />
                <ul>
                    {data.links.map((link) => (
                        <NavLink
                            key={link.href}
                            num={link.num}
                            label={link.label}
                            href={link.href}
                            onClick={onClose}
                        />
                    ))}
                </ul>
                {children}
            </div>
        </div>
    )
}

function NavLink({
    num,
    label,
    href,
    onClick,
}: {
    num: string
    label: string
    href: string
    onClick: () => void
}) {
    return (
        <li className="border-b border-white/10">
            <Link
                href={href}
                onClick={onClick}
                className="group flex items-center justify-between py-4 transition-all duration-200 hover:pl-1.5"
            >
                <div className="flex items-center gap-3">
                    <span className="min-w-5 font-sans text-xs text-white/40">{num}</span>
                    <span className="font-heading text-lg font-light leading-none text-white transition-colors group-hover:text-white/70">
                        {label}
                    </span>
                </div>
                <span className="-translate-x-1.5 text-sm text-white/40 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                    →
                </span>
            </Link>
        </li>
    )
}

export function Header() {
    const [open, setOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }
        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [open])

    const close = () => setOpen(false)

    return (
        <>
            <header
                className={cn(
                    'fixed top-0 z-50 w-full transition-colors duration-300',
                    isScrolled ? 'bg-primary' : 'bg-transparent'
                )}
            >
                <div className="flex items-center justify-between px-6 py-5 md:px-8 md:py-6">
                    <button
                        onClick={() => setOpen(!open)}
                        className="hover:text-secondary text-white transition-colors"
                        aria-label="Toggle menu"
                    >
                        {open ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                    </button>

                    <div className="absolute left-1/2 -translate-x-1/2 transform">
                        <a href="/" className="flex items-center">
                            <Image
                                src="/logo-white.svg"
                                alt="Escuela de Posgrado UNSAAC"
                                width={200}
                                height={50}
                                className="h-auto w-56 md:w-64"
                                priority
                            />
                        </a>
                    </div>

                    <button className="hover:text-secondary text-white transition-colors" aria-label="Search">
                        <Search className="h-7 w-7" />
                    </button>
                </div>
            </header>

            <div
                className={cn(
                    'fixed inset-0 z-40 h-screen w-screen transition-opacity duration-500 grid grid-cols-1',
                    LINKS.length === 2 && 'md:grid-cols-2',
                    LINKS.length >= 3 && 'md:grid-cols-3',
                    open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
                )}
            >
                {LINKS.map((panel, index) => (
                    <Panel
                        key={panel.id}
                        open={open}
                        index={index}
                        data={panel}
                        onClose={close}
                        className={index === 0 ? 'flex' : 'hidden md:flex'}
                    >
                        {panel.id === 3 && (
                            <div className="mt-6">
                                <button
                                    onClick={() => {
                                        console.log('Botón del panel 3 clickeado')
                                        close()
                                    }}
                                    className="w-full rounded-md bg-white py-3 px-4 text-center font-heading text-sm font-medium text-black transition-colors hover:bg-white/90"
                                >
                                    Solicitar Información
                                </button>
                            </div>
                        )}
                    </Panel>
                ))}
            </div>
        </>
    )
}
