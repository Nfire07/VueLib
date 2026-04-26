# Navbar

Navigation bar with links and theme/language switchers.

## Props

| Prop | Type | Default | Required | Description |
|------|------|--------|---------|-------------|
| `links` | `Array` | `[]` | No | Array of link objects or strings |
| `iconLabel` | `String` | `'Home'` | No | Home icon label text |
| `iconPath` | `String` | `'/favicon.ico'` | No | Icon image path |

### Link Structure

The `links` prop accepts two formats:

**String format**:
```javascript
['Home', 'Products', 'About']
```

**Object format** (recommended):
```javascript
[
  { name: 'Home', link: '/home' },
  { name: 'Docs', link: '/docs' },
  { name: 'GitHub', link: 'https://github.com' }
]
```

## Usage

```vue
<!-- String format -->
<Navbar :links="['Home', 'Products', 'About']" />

<!-- Object format -->
<Navbar :links="[
  { name: 'Home', link: '/home' },
  { name: 'Docs', link: '/docs' }
]" />
```

## Features

- Logo/icon slot with expand on hover
- Horizontal scrollable links (hidden scrollbar)
- Links rotate on horizontal to vertical display
- Integrated ThemeChanger component
- Integrated LanguageChanger component
- Transparent background
- Responsive design with breakpoint