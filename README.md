# S4M73l09 Infra Portfolio (Astro)

Este repositorio ha sido migrado a **Astro**.

Importante:
- `README.md` y `README.en.md` ya **no** son fuente de datos para renderizar la web.
- El contenido del sitio se mantiene en `src/content/*` y texto de UI en `src/domain/*`.

## Stack

- Astro (sitio estatico)
- Content Collections (`projects`, `labs`)
- Deploy en GitHub Pages con GitHub Actions

## Estructura actual

- `src/pages/`
  - Rutas principales ES/EN
  - Listados y detalles dinamicos: `projects` y `labs`
- `src/content/`
  - `projects/*.md` (ficheros por proyecto, ES/EN)
  - `labs/*.md` (ficheros por laboratorio, ES/EN)
  - `config.ts` (schema)
- `src/domain/portfolio/`
  - Tipos, copy de UI, repositorio de lectura de contenido
- `src/components/`
  - Componentes visuales (`ProjectGrid`, `ProfileGate`, `FlowBackground`, etc.)
- `src/styles/global.css`
  - Estilos globales, animaciones de entrada y tema visual
- `public/`
  - Recursos publicos (`favicon.svg`, `og-image.svg`) usados por SEO/social cards
- `.github/workflows/deploy.yml`
  - Build y deploy automatico a GitHub Pages

## Desarrollo local

Requisitos:
- Node.js 20+

Comandos:
- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Como anadir contenido

### Nuevo proyecto
1. Crear `src/content/projects/<nombre>.es.md`
2. Crear `src/content/projects/<nombre>.en.md`
3. Usar el mismo `routeSlug` en ambos idiomas

### Nuevo laboratorio
1. Crear `src/content/labs/<nombre>.es.md`
2. Crear `src/content/labs/<nombre>.en.md`
3. Usar el mismo `routeSlug` en ambos idiomas
4. Definir `provider`:
   - `gcs` para Google Cloud
   - `az` para Azure

Campos clave de frontmatter:
- `lang`: `es` o `en`
- `title`
- `routeSlug`
- `provider` (solo labs): `gcs` | `az`
- `challenge`
- `solution`
- `impact`
- `stack` (array)
- `repo` (URL)
- `featured` (boolean)
- `order` (numero)

## Nota sobre UI/Animaciones

La home incluye:
- Pantalla de entrada tipo consola con perfil
- Transicion de entrada sincronizada
- Fondo tipo PS flow para el sitio

Navegacion actual:
- Boton flotante izquierdo: volver a inicio
- Boton flotante derecho: cambiar entre `Proyectos` y `Laboratorio`
- Boton flotante superior derecho: cambio de idioma ES/EN
- Laboratorio agrupado por provider (`GCS` / `AZ`) con selector lateral
- Metadatos SEO/Open Graph/Twitter centralizados en `MainLayout`

Todo esto se controla en:
- `src/components/ProfileGate.astro`
- `src/components/FlowBackground.astro`
- `src/components/LabProviderAccordion.astro`
- `src/styles/global.css`
