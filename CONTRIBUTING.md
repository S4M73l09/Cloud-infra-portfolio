# Contributing (Solo Workflow)

Este repo lo mantengo yo, pero este documento evita romper estructura al iterar rapido.

## Reglas de estructura

- Contenido de proyectos/labs: `src/content/projects/*.md` y `src/content/labs/*.md`
- Copy y configuracion UI: `src/domain/portfolio/*`
- Componentes visuales: `src/components/*`
- Layout global: `src/layouts/MainLayout.astro`
- Estilos globales/animaciones: `src/styles/global.css`

## Al anadir contenido

- Crear archivo ES y EN
- Mantener el mismo `routeSlug` en ambos idiomas
- Definir `order` y `featured` correctamente
- Validar que `repo` sea URL valida

## Flujo de cambios recomendado

1. Hacer cambios pequenos y aislados
2. Ejecutar `npm run build`
3. Revisar rutas clave: `/`, `/projects`, `/labs`, `/en/*`
4. Commit con mensaje claro

## Checklist antes de push

- [ ] `npm run build` sin errores
- [ ] No hay archivos legacy del sitio antiguo
- [ ] Contenido ES/EN coherente
- [ ] Navegacion y enlaces internos correctos
- [ ] Animaciones de entrada no desincronizadas
