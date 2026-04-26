# Card

Flexible card component with image, text, and CTA support.

## Props

| Prop | Type | Default | Required | Description |
|------|------|--------|---------|-------------|
| `tag` | `String` | `'div'` | No | HTML tag |
| `title` | `String` | `null` | No | Card title |
| `description` | `String` | `null` | No | Card description text |
| `image` | `String` | `null` | No | Image URL |
| `imageAlt` | `String` | `''` | No | Image alt text |
| `imageHeight` | `String/Number` | `null` | No | Image height (e.g., `180`, `'200px'`) |
| `cta` | `String` | `null` | No | CTA text override |
| `ctaI18n` | `String` | `'readMore'` | No | i18n key for CTA |
| `width` | `String/Number` | `null` | No | Card width |
| `minWidth` | `String/Number` | `null` | No | Card min width |
| `maxWidth` | `String/Number` | `null` | No | Card max width |
| `height` | `String/Number` | `null` | No | Card height |
| `minHeight` | `String/Number` | `null` | No | Card min height |
| `maxHeight` | `String/Number` | `null` | No | Card max height |
| `padding` | `String/Number` | `null` | No | Card padding |
| `clickable` | `Boolean` | `false` | No | Enable click interaction |
| `outlined` | `Boolean` | `true` | No | Show border |
| `elevated` | `Boolean` | `false` | No | Show shadow |
| `bordered` | `Boolean` | `true` | No | Show border |

## Events

| Event | Payload | Description |
|-------|--------|-------------|
| `click` | `Event` | Fired on card click |

## Usage

```vue
<!-- Text card with title and description -->
<Card title="Card Title" description="Card description text" />

<!-- Card with image -->
<Card 
  title="Card Title" 
  description="Card description text" 
  image="/images/photo.jpg"
/>

<!-- Clickable card -->
<Card 
  title="Clickable Card" 
  description="Click to open"
  image="/images/photo.jpg"
  :clickable="true"
  @click="handleOpen"
/>

<!-- Custom CTA text -->
<Card 
  title="Custom CTA" 
  description="Description" 
  cta="Learn more"
/>

<!-- i18n CTA -->
<Card 
  title="i18n Card" 
  description="Will use locale" 
  cta-i18n="card.readMore"
/>

<!-- Sized card -->
<Card 
  title="Sized" 
  description="Custom sizes" 
  :width="300" 
  :min-height="200"
  image="/images/photo.jpg"
  image-height="150"
/>

<!-- Elevated card -->
<Card 
  title="Elevated" 
  description="With shadow" 
  :elevated="true"
/>
```

## Features

- Image support with configurable height
- Title and description
- CTA with i18n support
- Clickable cards with hover effects
- Outlined and elevated styles
- Custom dimensions via props
- Slot for custom footer content
- Keyboard accessible (Enter to click)