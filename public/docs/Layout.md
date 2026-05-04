# Layout

CSS Grid and Flexbox layout wrapper component.

## Props

| Prop | Type | Default | Required | Description |
|------|------|--------|---------|-------------|
| `tag` | `String` | `'div'` | No | HTML element tag |
| `type` | `String` | `'flex'` | No | Display type: `'flex'`, `'grid'`, `'inline-flex'`, `'inline-grid'` |
| `inline` | `Boolean` | `false` | No | Use inline display |
| `container` | `Boolean` | `false` | No | Wrap in centered container |
| `containerMaxWidth` | `String/Number` | `'1400px'` | No | Container max width |
| `containerPadding` | `String` | `'0 1.5rem'` | No | Container padding |
| `columns` | `String/Number` | `null` | No | Grid columns (`3` → `repeat(3, 1fr)`) |
| `rows` | `String/Number` | `null` | No | Grid rows |
| `areas` | `String/Array` | `null` | No | Grid template areas |
| `autoFill` | `Boolean` | `false` | No | Grid auto-fill with minWidth |
| `autoFit` | `Boolean` | `false` | No | Grid auto-fit with minWidth |
| `minWidth` | `String` | `null` | No | Grid min column width for auto-fill/fit |
| `direction` | `String` | `'row'` | No | Flex direction: `'row'`, `'col'`, `'column'`, `'stack'` |
| `wrap` | `Boolean/String` | `true` | No | Flex wrap: `true`, `false`, or `'wrap'`/`'nowrap'` |
| `gap` | `String/Number` | `null` | No | Gap between items |
| `rowGap` | `String/Number` | `null` | No | Row gap |
| `columnGap` | `String/Number` | `null` | No | Column gap |
| `align` | `String` | `null` | No | align-items |
| `alignContent` | `String` | `null` | No | align-content |
| `justify` | `String` | `null` | No | justify-content |
| `justifyItems` | `String` | `null` | No | justify-items |
| `place` | `String` | `null` | No | place-items and place-content |
| `placeItems` | `String` | `null` | No | place-items |
| `placeContent` | `String` | `null` | No | place-content |
| `center` | `Boolean` | `false` | No | Center horizontally with margin-inline: auto |
| `width` | `String` | `null` | No | Width |
| `height` | `String` | `null` | No | Height |
| `minHeight` | `String` | `null` | No | Min height |
| `maxWidth` | `String/Number` | `null` | No | Max width |
| `maxHeight` | `String/Number` | `null` | No | Max height |
| `padding` | `String` | `null` | No | Padding |
| `margin` | `String` | `null` | No | Margin |
| `grow` | `Boolean/Number` | `null` | No | flex-grow |
| `shrink` | `Boolean/Number` | `null` | No | flex-shrink |
| `basis` | `String` | `null` | No | flex-basis |
| `flex` | `String` | `null` | No | flex shorthand |
| `position` | `String` | `null` | No | position |
| `overflow` | `String` | `null` | No | overflow |
| `overflowX` | `String` | `null` | No | overflow-x |
| `overflowY` | `String` | `null` | No | overflow-y |
| `zIndex` | `Number` | `null` | No | z-index |
| `background` | `String` | `null` | No | Background |
| `borderRadius` | `String/Number` | `null` | No | Border radius |
| `dense` | `Boolean` | `false` | No | Grid auto-flow: dense |
| `fullHeight` | `Boolean` | `false` | No | height: 100% |
| `fullWidth` | `Boolean` | `false` | No | width: 100% |
| `stack` | `Boolean` | `false` | No | Stack vertically (direction: column) |
| `reverse` | `Boolean` | `false` | No | Reverse direction |

## Usage

```vue
<!-- Basic flex row -->
<Layout type="flex" gap="1rem">
  <div>Item 1</div>
  <div>Item 2</div>
</Layout>

<!-- Flex column -->
<Layout type="flex" direction="col" gap="1rem">
  <div>Item 1</div>
  <div>Item 2</div>
</Layout>

<!-- Grid with numeric columns -->
<Layout type="grid" :columns="3" gap="1rem">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Layout>

<!-- Grid with auto-fill -->
<Layout type="grid" :auto-fill="true" min-width="250px" gap="1rem">
  <div>Item 1</div>
  <div>Item 2</div>
</Layout>

<!-- Center content -->
<Layout :center="true" :max-width="600">
  <div>Centered</div>
</Layout>

<!-- Full viewport height -->
<Layout type="flex" direction="col" :full-height="true">
  <header>Header</header>
  <main>Content</main>
</Layout>

<!-- With padding and background -->
<Layout padding="2rem" background="var(--surface)">
  <div>Content</div>
</Layout>
```

## Features

- Flexbox and CSS Grid layouts
- Numeric columns (` :columns="3"` → `repeat(3, 1fr)`)
- Auto-fill/auto-fit grids with minWidth
- Grid template areas
- Flex wrap control
- Stack mode (vertical)
- Direction reversal
- Gap/rowGap/columnGap
- Full width/height support
- Container wrapper with max-width
- All CSS display properties supported