# AGENTS.md ― posgrado-website

Sitio web de la Escuela de Posgrado (UNSAAC). Next.js 16 App Router + React 19 + Tailwind CSS v4 + shadcn/ui.

---

## Stack

| Capa             | Tecnología                                      |
| ---------------- | ----------------------------------------------- |
| Framework        | Next.js 16.2.9 (App Router)                     |
| UI               | React 19.2.4                                    |
| Lenguaje         | TypeScript 5 (`strict: true`)                   |
| Estilos          | Tailwind CSS v4 (PostCSS)                       |
| Componentes base | shadcn/ui (`radix-nova`)                        |
| Primitivas       | Radix UI                                        |
| Iconos           | lucide-react                                    |
| Font             | Merriweather (`next/font/google`)               |
| Package manager  | pnpm                                            |
| Linting          | ESLint (next/core-web-vitals + next/typescript) |
| Formateo         | Prettier                                        |
| Imágenes         | Cloudinary (`res.cloudinary.com/ds0tjwccs/`)    |

---

## Estructura de carpetas

```
src/
├── app/                          # Next.js App Router
│   ├── (site)/                   # Route group — páginas públicas del sitio
│   │   ├── [tipo_programa]/      # Listado de programas por tipo (maestrías, doctorados, etc.)
│   │   │   └── [slug]/           # Detalle de un programa
│   │   ├── comunicados/          # Listado de comunicados
│   │   │   └── [slug]/           # Detalle de un comunicado
│   │   ├── layout.tsx            # Layout del route group
│   │   └── page.tsx              # Home page
│   ├── globals.css               # Estilos globales + tema Tailwind v4 + shadcn
│   ├── layout.tsx                # Root layout (html, body, fuente)
│   └── not-found.tsx
├── components/
│   ├── ui/                       # Componentes shadcn (NO modificar salvo extensión)
│   │   ├── aspect-ratio.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── select.tsx
│   ├── container.tsx             # Contenedor max-w-7xl centrado
│   ├── heading.tsx               # Título de sección reutilizable
│   ├── header.tsx                # Header global
│   ├── footer.tsx                # Footer global
│   ├── programa-card.tsx         # Tarjeta de programa (listado)
│   ├── tipo-programa-card.tsx    # Tarjeta de tipo de programa (home)
│   ├── comunicado-card.tsx       # Tarjeta de comunicado
│   └── program-filters.tsx       # Filtros de búsqueda ('use client')
├── data/                         # Datos estáticos / fixtures
│   └── student.ts
├── lib/
│   └── utils.ts                  # Helper cn() — clsx + tailwind-merge
├── models/                       # Interfaces y tipos TypeScript
│   └── tipo-programa.ts
├── pages/                        # Componentes de página (secciones)
│   ├── hero-section.tsx          # Hero reutilizable para páginas internas
│   └── home/                     # Secciones de la home
│       ├── admission-cta.tsx
│       ├── featured-programs.tsx
│       ├── hero.tsx
│       ├── latest-comunicados.tsx
│       ├── rector-message.tsx
│       └── student-faq.tsx
└── routes/
    └── index.ts                  # Constantes de rutas (ROUTES)
```

---

## Alias (tsconfig paths)

| Alias             | Resuelve a          |
| ----------------- | ------------------- |
| `@/*`             | `src/*`             |
| `@/components`    | `src/components`    |
| `@/components/ui` | `src/components/ui` |
| `@/lib`           | `src/lib`           |
| `@/hooks`         | `src/hooks`         |

---

## Convenciones de código

### TypeScript

- `strict: true`. No usar `any` sin justificación explícita.
- Interfaces de dominio en `src/models/`. Datos estáticos en `src/data/`.
- Preferir `interface` para props de componentes y entidades; `type` para unions y utilities.

### Componentes

- **Páginas internas**: `export default function` en `src/pages/<seccion>/...`. Se importan desde `app/(site)/.../page.tsx`.
- **Componentes compartidos**: `export default function` en `src/components/`. Si tiene múltiples exports nombrados, usar `export function`.
- **Componentes shadcn**: están en `src/components/ui/`. No modificar su estructura interna. Agregar nuevos con `npx shadcn@latest add <component>` (vía MCP de shadcn disponible en opencode.json).
- Los componentes `'use client'` deben marcarse explícitamente con el directive al inicio del archivo.

### Estilos

- Usar **Tailwind CSS v4** con clases utilitarias. No crear archivos `.module.css`.
- Combinar clases condicionales con `cn()` de `@/lib/utils` (clsx + tailwind-merge).
- Las variantes de tema (dark) se definen con `@custom-variant dark (&:is(.dark *))` en `globals.css`.
- Tema base: neutral (`oklch`), radio `0.625rem`, fuente `--font-serif` (Merriweather).
- No usar `tailwind.config.ts` (la config va en `globals.css` con `@theme inline` y en `postcss.config.mjs` con `@tailwindcss/postcss`).

### Imágenes

- Usar `next/image` para imágenes servidas desde Cloudinary y assets propios.
- Las imágenes externas deben estar en `remotePatterns` de `next.config.ts`.
- Cloudinary configurado: `res.cloudinary.com/ds0tjwccs/**`.

### Navegación y rutas

- Definir rutas en `src/routes/index.ts` usando `as const`:
  ```ts
  export const ROUTES = {
    HOME: '/',
    COMUNICADOS: '/comunicados',
    PROCESO_ADMISION: '/proceso-admision',
  } as const
  ```
- Usar `ROUTES.XXX` en lugar de strings duros para links internos.
- Rutas dinámicas: `[tipo_programa]` y `[slug]` dentro del route group `(site)`.

### Datos y modelos

- `models/` define la forma de los datos (interfaces/entidades).
- `data/` contiene fixtures estáticos que se iteran en componentes.
- Si se conecta una API/backend en el futuro, `data/` pasa a ser la capa de fetching (server components con `fetch` o similar).

---

## Scripts

| Comando             | Descripción                             |
| ------------------- | --------------------------------------- |
| `pnpm dev`          | Servidor de desarrollo (localhost:3000) |
| `pnpm build`        | Build de producción                     |
| `pnpm start`        | Iniciar servidor de producción          |
| `pnpm lint`         | Ejecutar ESLint                         |
| `pnpm format`       | Formatear con Prettier (write)          |
| `pnpm format:check` | Verificar formato con Prettier          |

---

## Flujo de trabajo

1. **Antes de empezar**: `pnpm lint` y `pnpm format:check` para partir de un estado limpio.
2. **Desarrollo**: `pnpm dev`.
3. **Agregar componentes shadcn**: usar `npx shadcn@latest add <component>` (se instalan en `src/components/ui/`).
4. **Antes de marcar una tarea como completada**: ejecutar `pnpm lint` y `pnpm build` para verificar que no hay errores.
5. **Commits**: solo hacer commit si el usuario lo pide explícitamente.

---

## Reglas para el agente

### Siempre

- **No agregar comentarios** al código fuente a menos que el usuario lo pida.
- Usar `cn()` para combinar clases de Tailwind.
- Usar `next/image` para imágenes (no `<img>`).
- Usar las constantes de `src/routes/index.ts` para navegación.
- Respetar las configuraciones de Prettier: sin punto y coma, comillas simples, trailing comma ES5, 100 chars de ancho.
- Preferir server components. Solo agregar `'use client'` cuando sea estrictamente necesario (hooks, event handlers, estado).

### Nunca

- No modificar archivos en `src/components/ui/` salvo para extender un componente existente con nuevas variantes, y solo si no hay alternativa.
- No crear `tailwind.config.ts` ni archivos `.module.css`.
- No usar strings duros para rutas internas. Siempre usar `ROUTES`.
- No commitear sin instrucción explícita del usuario.
- No introducir `any` sin justificación.

---

## Notas

- El proyecto está en fase inicial. Varios componentes están como placeholders:
  - `src/components/header.tsx`
  - `src/components/footer.tsx`
  - `src/components/comunicado-card.tsx`
  - `src/pages/home/latest-comunicados.tsx`
  - `src/app/(site)/[tipo_programa]/[slug]/page.tsx`
  - `src/app/(site)/comunicados/page.tsx`
  - `src/app/(site)/comunicados/[slug]/page.tsx`
- Typos conocidos pendientes de corrección:
  - `src/models/tipo-programa.ts`: `nomre` → `nombre`
  - `src/pages/home/student-faq.tsx`: `headign` → `heading`
