# Card Component

A flexible card component with optional image, title, description, scrollable item list, and modal functionality.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tag` | String | `'div'` | HTML tag to render the card as |
| `title` | String | `null` | Card title displayed in the header |
| `description` | String | `null` | Card description text |
| `image` | String | `null` | URL for the card image |
| `imageAlt` | String | `''` | Alt text for the image |
| `imageHeight` | String/Number | `null` | Height of the image (auto-px conversion) |
| `cta` | String | `null` | Call-to-action text (overrides ctaI18n) |
| `ctaI18n` | String | `'readMore'` | I18n key for CTA text |
| `width` | String/Number | `null` | Card width (auto-px conversion) |
| `minWidth` | String/Number | `null` | Minimum card width |
| `maxWidth` | String/Number | `null` | Maximum card width |
| `height` | String/Number | `null` | Card height |
| `minHeight` | String/Number | `null` | Minimum card height |
| `maxHeight` | String/Number | `null` | Maximum card height |
| `padding` | String/Number | `null` | Card padding |
| `clickable` | Boolean | `false` | Makes the entire card clickable |
| `outlined` | Boolean | `true` | Adds outline border |
| `elevated` | Boolean | `false` | Adds elevated shadow |
| `bordered` | Boolean | `true` | Adds border |
| `items` | Array | `() => []` | List of items to display in a scrollable list |
| `itemKey` | String | `'id'` | Property to use as unique key for items |
| `itemLabel` | String | `'label'` | Property to display as label for items |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `click` | Event | Emitted when clickable card is clicked |
| `item-click` | Object (item) | Emitted when an item in the list is clicked |

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `default` | - | Default slot for custom content inside card body |
| `footer` | - | Slot for custom footer content (replaces default CTA) |
| `modal` | `{ item }` | Slot for custom modal content when an item is clicked |

## Usage Examples

### Basic Card

```vue
<Card 
  title="My Card" 
  description="This is a basic card"
  min-width="300px"
/>
```

### Card with Items List

```vue
<template>
  <Card 
    title="Tasks" 
    :items="tasks"
    item-label="title"
    @item-click="handleTaskClick"
  >
    <template #modal="{ item }">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
      <p>Status: {{ item.status }}</p>
    </template>
  </Card>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        { id: 1, title: 'Task 1', description: 'Do something', status: 'Pending' },
        { id: 2, title: 'Task 2', description: 'Do something else', status: 'Completed' },
      ]
    }
  },
  methods: {
    handleTaskClick(task) {
      console.log('Clicked task:', task)
    }
  }
}
</script>
```

### Clickable Card with CTA

```vue
<Card 
  title="Clickable Card" 
  description="Click me!"
  clickable
  cta="Learn More"
  @click="navigateToDetails"
/>
```

### Card with Image

```vue
<Card 
  title="Image Card"
  description="Card with an image"
  image="/path/to/image.jpg"
  image-alt="Description of image"
  image-height="200"
/>
```

## Styling

The component uses CSS custom properties:
- `--background`: Card background color
- `--foreground`: Text and border colors
- `--primary`: Primary color for hover effects and CTA

## Features

- **Scrollable Item List**: When `items` prop is provided, displays a scrollable list (max-height: 300px) with hover effects
- **Modal on Item Click**: Clicking an item opens a modal with the item details
- **Custom Modal Content**: Use the `#modal` slot to provide custom modal content
- **Responsive Design**: Supports various height/width props with automatic px conversion for numbers
- **I18n Support**: CTA text supports internationalization via `ctaI18n` prop
