# 🏢 Malu - Sistema de Gestión de Condominios

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/tu-usuario/malu-landing-page)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tu-usuario/malu-landing-page)

> **Landing page moderna y optimizada para Malu** - El sistema #1 de gestión de condominios en LATAM. Construido con React, TypeScript, Tailwind CSS y optimizado para SEO y rendimiento.

## 🚀 Características Principales

### ✨ Diseño y UX
- **Diseño minimalista y moderno** con enfoque en conversión
- **Responsive design** - Perfecta en móvil, tablet y desktop
- **Modo oscuro/claro** con persistencia automática
- **Animaciones suaves** con Framer Motion
- **Accesibilidad completa** (WCAG 2.1 AA)

### 🌍 Internacionalización
- **Bilingüe**: Español (ES) e Inglés (EN)
- **Detección automática** del idioma del navegador
- **SEO multiidioma** con hreflang y canonical URLs
- **Persistencia** de idioma seleccionado

### 🔍 SEO Avanzado
- **Structured Data** (JSON-LD) para mejor indexación
- **Meta tags optimizados** para Google, Facebook y Twitter
- **Sitemap.xml** y robots.txt configurados
- **Core Web Vitals optimizados** para ranking
- **PWA ready** con manifest y service worker

### ⚡ Rendimiento
- **Lazy loading** de imágenes y componentes
- **Code splitting** automático por rutas
- **Bundle optimization** con Vite
- **CDN ready** para deployment global
- **Cache headers** optimizados

## 🛠️ Stack Tecnológico

```bash
├── React 18.3+          # UI Library
├── TypeScript 5.9+      # Type Safety
├── Vite 7.1+           # Build Tool
├── Tailwind CSS 3.4+   # Styling
├── Framer Motion 11+    # Animations
├── React i18next 15+    # Internationalization
├── React Helmet 2+      # SEO Meta Tags
└── PWA Support         # Progressive Web App
```

## 🏃‍♂️ Inicio Rápido

### Prerrequisitos
```bash
node >= 18.0.0
npm >= 9.0.0
```

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/malu-landing-page.git
cd malu-landing-page

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Abrir en navegador
open http://localhost:5173
```

### Scripts Disponibles
```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run preview      # Preview del build
npm run lint         # ESLint para código
npm run type-check   # TypeScript type checking
```

## 📁 Estructura del Proyecto

```
malu-landing-page/
├── public/                 # Assets estáticos
│   ├── favicon.svg        # Favicon optimizado
│   ├── manifest.json      # PWA manifest
│   ├── robots.txt         # SEO robots
│   └── sitemap.xml        # Sitemap para buscadores
├── src/
│   ├── components/        # Componentes React
│   │   ├── icons/         # Iconos SVG optimizados
│   │   ├── ui/           # Componentes UI reutilizables
│   │   ├── Header.tsx     # Header con navegación
│   │   ├── Hero.tsx       # Sección hero principal
│   │   ├── Features.tsx   # Bloques de características
│   │   ├── DashboardPreview.tsx # Preview del dashboard
│   │   ├── CTA.tsx        # Call to action
│   │   └── Footer.tsx     # Footer con links
│   ├── hooks/            # React hooks personalizados
│   │   ├── useDarkMode.ts        # Hook para tema oscuro
│   │   ├── useScrollspy.ts       # Hook para scroll spy
│   │   └── useIntersectionObserver.ts # Hook para animaciones
│   ├── i18n/             # Configuración de idiomas
│   │   ├── index.ts      # Setup de i18next
│   │   └── locales/      # Archivos de traducción
│   │       ├── es.json   # Textos en español
│   │       └── en.json   # Textos en inglés
│   ├── App.tsx           # Componente principal
│   ├── main.tsx          # Entry point
│   └── index.css         # Estilos globales
├── tailwind.config.js    # Configuración de Tailwind
├── vite.config.ts        # Configuración de Vite
├── tsconfig.json         # Configuración de TypeScript
├── netlify.toml          # Config para Netlify
├── vercel.json           # Config para Vercel
└── package.json          # Dependencias y scripts
```

## 🎨 Personalización

### Colores y Tema
Los colores están definidos en `tailwind.config.js`:

```js
colors: {
  primary: {
    500: '#0ea5a4',    // Teal principal
    600: '#0d9488',    // Teal oscuro
    // ... más variantes
  },
  secondary: {
    500: '#3b82f6',    // Azul secundario
    // ... más variantes
  }
}
```

### Textos e Idiomas
Los textos están en `src/i18n/locales/`:
- `es.json` - Textos en español
- `en.json` - Textos en inglés

### Componentes
Todos los componentes están en `src/components/` y son modulares y reutilizables.

## 🚀 Deployment

### Netlify (Recomendado)
```bash
# Build automático desde Git
1. Conectar repositorio en Netlify
2. Build command: npm run build
3. Publish directory: dist
4. Deploy automático en cada push
```

### Vercel
```bash
# Deploy con Vercel CLI
npm i -g vercel
vercel --prod
```

### Manual
```bash
# Build para producción
npm run build

# Los archivos estarán en ./dist/
# Subir contenido de dist/ a tu servidor
```

## 📊 SEO y Analytics

### Google Analytics 4
Actualizar el ID en `index.html`:
```html
<!-- Reemplazar GA_MEASUREMENT_ID -->
gtag('config', 'TU_GA_ID');
```

### Search Console
1. Verificar propiedad en Google Search Console
2. Subir sitemap: `https://tudominio.com/sitemap.xml`
3. Monitorear indexación y rendimiento

### Core Web Vitals
El sitio está optimizado para:
- **LCP** < 2.5s (Largest Contentful Paint)
- **FID** < 100ms (First Input Delay)
- **CLS** < 0.1 (Cumulative Layout Shift)

## 📱 Progressive Web App (PWA)

El sitio incluye configuración PWA completa:
- ✅ Manifest configurado
- ✅ Service Worker (via Vite PWA)
- ✅ Iconos para todas las plataformas
- ✅ Offline fallback
- ✅ Instalable en móviles

## 🔧 Desarrollo

### Agregar Nueva Sección
1. Crear componente en `src/components/`
2. Agregar textos a archivos de i18n
3. Importar y usar en `App.tsx`
4. Actualizar navegación si es necesario

### Cambiar Idioma
```typescript
import { useTranslation } from 'react-i18next';

const { t, i18n } = useTranslation();
i18n.changeLanguage('en'); // Cambiar a inglés
```

### Agregar Animación
```typescript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Contenido animado
</motion.div>
```

## 📈 Optimizaciones Aplicadas

### Performance
- **Code splitting** por componentes
- **Tree shaking** para eliminar código no usado
- **Image optimization** con formatos modernos
- **Font preloading** de Google Fonts
- **Critical CSS** inline para LCP

### SEO
- **Structured data** para rich snippets
- **Canonical URLs** para evitar duplicados
- **Hreflang** para múltiples idiomas
- **Meta tags** optimizados para social media
- **Sitemap XML** actualizado automáticamente

### Seguridad
- **Content Security Policy** (CSP)
- **Security headers** configurados
- **HTTPS redirect** preparado
- **XSS protection** habilitada

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama para feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más información.

## 📞 Contacto

**Malu Team** - [@malusistema](https://twitter.com/malusistema) - mauro@holy-code.com

Project Link: [https://github.com/tu-usuario/malu-landing-page](https://github.com/tu-usuario/malu-landing-page)

---

⭐️ **¿Te gustó el proyecto?** ¡Dale una estrella en GitHub!

🚀 **¿Quieres la demo?** Visita [https://malu.com](https://malu.com)
