# Navbar

Navigation bar with links and theme/language switchers.

## Props

| Prop | Type | Default | Required | Description |
|------|------|--------|---------|-------------|
| `links` | `Array` | `[]` | No | Array of link objects |
| `iconLabel` | `String` | `'Home'` | No | Home icon label |
| `iconPath` | `String` | `'/favicon.ico'` | No | Icon image path |

### Link Structure

```javascript
{
  label: String,    // display text
  href: String     // link URL
}
```

## Requirements

None - integrates ThemeChanger and LanguageChanger.

## Usage

```vue
<Navbar
  :links="[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' }
  ]"
/>
```

## Features

- Logo/icon slot
- Horizontal scrollable links
- Integrated ThemeChanger
- Integrated LanguageChanger
- Transparent background