# VueLib

A collection of modern Vue 3 components built with composition API, Pinia for state management, and i18n support.

## Features

- **Composition API** - All components use Vue 3 composition API with `<script setup>` patterns
- **Pinia Integration** - Centralized state management via `useGenericStore`
- **i18n Support** - Full English/Italian localization
- **PrimeVue** - Uses PrimeVue for form inputs
- **Swiper** - Carousel component uses Swiper.js
- **Material Icons** - Material Design Icons throughout

## Components

### Layout & Navigation

| Component | Description |
|-----------|-------------|
| `Navbar` | Navigation bar with theme/language switchers |
| `Layout` | Page layout wrapper |
| `ThemeChanger` | Light/dark theme toggle |
| `LanguageChanger` | EN/IT language switcher |

### UI Elements

| Component | Description |
|-----------|-------------|
| `Alert` | Toast-style alert with types (success, error, warning, info) |
| `Fab` | Floating action button with expandable actions |
| `Modal` | Reusable modal dialog with Teleport |
| `Hero` | Hero section with carousel (demo component) |

### Data Display

| Component | Description |
|-----------|-------------|
| `DataTable` | Sortable, filtering, paginated data table |
| `DataChart` | Chart.js wrapper for line, bar, pie, doughnut, radar charts |
| `Calendar` | Event calendar with day modal |
| `Gantt` | Gantt chart for task timeline |
| `Carousel` | Multi-variant carousel (classic, hero, fullscreen, cards, coverflow) |
| `DataLoader` | Loading states (loading, error, empty, success) |

### Forms

| Component | Description |
|-----------|-------------|
| `DynamicForm` | Dynamic form builder with many field types |
| `Modal` | Modal dialog wrapper |

## Installation

```bash
npm install
npm run dev
```

## Usage

### With Store

Components use Pinia's `useGenericStore` for language/theme:

```vue
<script>
import { useGenericStore } from '@/stores/generic'

const store = useGenericStore()
</script>
```

### With i18n

All components import locale files directly:

```javascript
import en from '@/locales/en.json'
import it from '@/locales/it.json'
```

## Component Architecture

```
Components using Pinia + i18n:
├── Alert
├── Calendar
├── Carousel
├── DataChart
├── DataLoader
├── DataTable
├── DynamicForm
├── Fab
├── Gantt
├── LanguageChanger
└── ThemeChanger

Components without Pinia (generic UI):
├── Hero (demo)
└── Modal (pure UI wrapper)
```

## Tech Stack

- Vue 3.5+
- Pinia 3.x
- PrimeVue 4.x
- Chart.js 4.x
- Swiper 12.x
- Vite 6.x