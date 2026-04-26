# DataChart

Chart.js wrapper for rendering charts.

## Props

| Prop | Type | Default | Required | Description |
|------|------|--------|---------|-------------|
| `type` | `String` | `'line'` | No | Chart type: `'line'`, `'bar'`, `'pie'`, `'doughnut'`, `'radar'`, `'polarArea'`, `'bubble'`, `'scatter'` |
| `labels` | `Array` | `[]` | No | X-axis labels |
| `datasets` | `Array` | `[]` | No | Data sets |
| `title` | `String` | `null` | No | Chart title |
| `subtitle` | `String` | `null` | No | Chart subtitle |
| `width` | `String` | `'100%'` | No | Chart width |
| `height` | `String` | `'320px'` | No | Chart height |
| `colors` | `Array` | `[]` | No | Custom colors array |
| `fill` | `Boolean` | `false` | No | Fill area under line |
| `tension` | `Number` | `0.4` | No | Line curve tension |
| `borderWidth` | `Number` | `2` | No | Border width |
| `pointRadius` | `Number` | `4` | No | Point radius |
| `showLegend` | `Boolean` | `true` | No | Show legend |
| `legendPosition` | `String` | `'bottom'` | No | Legend position |
| `showGrid` | `Boolean` | `true` | No | Show grid lines |
| `showTooltip` | `Boolean` | `true` | No | Show tooltips |
| `stacked` | `Boolean` | `false` | No | Stack datasets |
| `horizontal` | `Boolean` | `false` | No | Horizontal bar |
| `beginAtZero` | `Boolean` | `true` | No | Begin y-axis at zero |
| `xLabel` | `String` | `null` | No | X-axis label |
| `yLabel` | `String` | `null` | No | Y-axis label |
| `options` | `Object` | `{}` | No | Additional Chart.js options |
| `animate` | `Boolean` | `true` | No | Enable animation |
| `animationDuration` | `Number` | `800` | No | Animation duration (ms) |
| `padding` | `String` | `null` | No | Container padding |
| `background` | `String` | `null` | No | Container background |

### Dataset Structure

```javascript
{
  label: String,        // dataset label
  data: Array,        // array of numbers
  borderColor: String, // line color
  backgroundColor: String, // fill color
  fill: Boolean,      // fill this dataset
  tension: Number,    // curve tension
  borderWidth: Number // line width
}
```

## Requirements

- **Pinia Store**: Uses `useGenericStore` for language state
- **Locale Files**: Imports `en.json` / `it.json`
- **Chart.js**: Dynamically loaded from CDN

## Usage

```vue
<DataChart
  type="bar"
  :labels="['Jan', 'Feb', 'Mar']"
  :datasets="[
    { label: 'Sales', data: [120, 180, 90] }
  ]"
  title="Monthly Sales"
/>
```

## Features

- Multiple chart types
- Multi-dataset support
- Custom colors
- Dynamic Chart.js loading
- Responsive sizing
- Animation control
- Grid/legend/tooltip toggles
- Stacked/horizontal bars
- Theme color integration