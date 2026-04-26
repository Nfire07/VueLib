# Hero

Hero section component using Carousel for demo/landing pages.

## Props

None - component uses hardcoded slides internally based on a 3D printing business theme.

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `modal-open` | `Object` | Modal opened with slide data |
| `cta-click` | `Object` | CTA button clicked |

## Usage

```vue
<Hero />
```

## Features

- Demo component with sample slides
- Uses Carousel with hero variant
- Autoplay enabled (5000ms delay)
- 80vh height
- Save button in hero action slot
- Modal with full text on click
- Console logging for events (for demo)