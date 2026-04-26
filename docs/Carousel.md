# Carousel

Multi-variant carousel component with Swiper.js.

## Props

| Prop | Type | Default | Required | Description |
|------|------|--------|---------|-------------|
| `items` | `Array` | - | Yes | Array of slide objects |
| `variant` | `String` | `'classic'` | No | Variant: `'classic'`, `'hero'`, `'fullscreen'`, `'cards'`, `'coverflow'` |
| `modal` | `Boolean` | `true` | No | Enable modal on click |
| `autoplay` | `Boolean` | `false` | No | Enable autoplay |
| `autoplayDelay` | `Number` | `4000` | No | Autoplay delay in ms |
| `loop` | `Boolean` | `true` | No | Enable loop |
| `ctaLabel` | `String` | `''` | No | CTA button text |
| `heroHeight` | `String` | `'520px'` | No | Hero variant height |

### Item Structure

```javascript
{
  title: String,        // slide title
  description: String,  // slide description
  fullText: String,    // modal content (optional)
  tag: String,       // optional tag/chip
  image: String,      // image URL
  emoji: String,      // fallback emoji
  color: String       // fallback background color
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `modal-open` | `Object` | Item opened in modal |
| `modal-close` | `Object` | Modal closed |
| `cta-click` | `Object` | CTA button clicked |

## Usage

```vue
<Carousel
  :items="slides"
  variant="hero"
  :autoplay="true"
  cta-label="View More"
  @cta-click="handleClick"
/>
```

## Variants

- **classic**: Cards with image, tag, description, CTA
- **hero**: Full-width hero slides with gradient overlay
- **fullscreen**: Fullscreen slides with counter
- **cards**: Stacked card effect with flip
- **coverflow**: 3D coverflow effect with rotation

## Features

- Multiple variants with unique styling
- Modal support for all variants
- Autoplay with progress bar (hero)
- Keyboard accessibility (A11y)
- Navigation/pagination (Swiper)
- Smooth transitions and animations