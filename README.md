# VueLib

A collection of modern Vue 3 components built with Composition API, Pinia for state management, and i18n support.

## Features

- **Composition API** - All components use Vue 3 Composition API
- **Pinia Integration** - Centralized state management via `useGenericStore`
- **i18n Support** - Full English/Italian localization
- **marked.js** - Markdown rendering
- **Highlight.js** - Code syntax highlighting
- **Material Icons** - Material Design Icons

## Components

### Layout & Navigation

| Component | Description |
|-----------|-------------|
| `Navbar` | Navigation bar with links |
| `Layout` | CSS Grid/Flex layout wrapper |
| `ThemeChanger` | Light/dark theme toggle |
| `LanguageChanger` | EN/IT language switcher |

### UI Elements

| Component | Description |
|-----------|-------------|
| `Card` | Flexible card with image, text, CTA |
| `Alert` | Toast-style alert with types |
| `Fab` | Floating action button |
| `Modal` | Modal dialog with Teleport |
| `Hero` | Hero section demo component |
| `Markdown` | Markdown renderer with highlighting |

### Data Display

| Component | Description |
|-----------|-------------|
| `DataTable` | Sortable, filtering table |
| `DataChart` | Chart.js wrapper |
| `Calendar` | Event calendar |
| `Gantt` | Gantt chart |
| `Carousel` | Multi-variant carousel |
| `DataLoader` | Loading states component |

### Forms

| Component | Description |
|-----------|-------------|
| `DynamicForm` | Dynamic form builder |

## Installation

```bash
npm install
npm run dev
```

## Quick Start

```vue
<script setup>
import Navbar from '@/components/Navbar.vue'
import Layout from '@/components/Layout.vue'
import Card from '@/components/Card.vue'

const links = [
  { name: 'Home', link: '/' },
  { name: 'Docs', link: '/docs' },
]
</script>

<template>
  <Navbar :links="links" />
  
  <Layout type="flex" direction="col" gap="1rem">
    <Card 
      title="Welcome" 
      description="Get started with VueLib"
      :clickable="true"
    />
  </Layout>
</template>
```

## Usage

### With Store

Components use Pinia's `useGenericStore` for language/theme:

```javascript
import { useGenericStore } from '@/stores/generic'

const store = useGenericStore()
store.language // 'en' | 'it'
store.theme // 'light' | 'dark'
```

### With i18n

Locale files are in `src/locales/`:

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
├── Markdown
└── ThemeChanger

Components without Pinia (generic):
├── Card
├── Hero
├── Layout
├── Modal
├── Navbar
```

## Tech Stack

- Vue 3.5+
- Pinia 3.x
- marked.js 12.x
- highlight.js 11.x
- Vite 6.x