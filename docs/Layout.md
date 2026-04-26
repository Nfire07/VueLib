# Layout

Flexible layout wrapper with CSS Grid/Flex support.

## Props

| Prop | Type | Default | Required | Description |
|------|------|--------|---------|-------------|
| `tag` | `String` | `'div'` | No | HTML tag |
| `type` | `String` | `'flex'` | No | Layout type: `'flex'`, `'grid'`, `'inline-flex'`, `'inline-grid'` |
| `columns` | `String/Number` | `null` | No | Grid columns |
| `rows` | `String/Number` | `null` | No | Grid rows |
| `gap` | `String/Number` | `'1rem'` | No | Gap between items |
| `rowGap` | `String/Number` | `null` | No | Row gap |
| `columnGap` | `String/Number` | `null` | No | Column gap |
| `align` | `String` | `null` | No | Align items |
| `justify` | `String` | `null` | No | Justify content |
| `direction` | `String` | `null` | No | Flex direction |
| `wrap` | `Boolean` | `true` | No | Enable flex wrap |
| `inline` | `Boolean` | `false` | No | Inline display |
| `minWidth` | `String` | `null` | No | Min width |
| `autoFill` | `Boolean` | `false` | No | Grid auto-fill |
| `autoFit` | `Boolean` | `false` | No | Grid auto-fit |
| `areas` | `String/Array` | `null` | No | Grid template areas |
| `padding` | `String` | `null` | No | Padding |
| `width` | `String` | `null` | No | Width |
| `height` | `String` | `null` | No | Height |
| `maxWidth` | `String` | `null` | No | Max width |
| `center` | `Boolean` | `false` | No | Center content |
| `margin` | `String` | `'0px'` | No | Margin |

## Requirements

None - pure CSS layout component.

## Usage

```vue
<!-- Flex -->
<Layout type="flex" gap="1rem" align="center">
  <div>Item 1</div>
  <div>Item 2</div>
</Layout>

<!-- Grid -->
<Layout type="grid" columns="repeat(3, 1fr)" gap="1rem">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Layout>
```

## Features

- Flex and Grid layouts
- CSS Grid template areas
- Auto-fill/auto-fit grids
- Gap/rowGap/columnGap
- All CSS alignment options
- Customizable HTML tag