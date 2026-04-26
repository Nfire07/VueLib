# DataLoader

Data fetching component with loading states (loading, error, empty, success).

## Props

| Prop | Type | Default | Required | Description |
|------|------|--------|---------|-------------|
| `url` | `String` | - | Yes | API endpoint URL |
| `fetchOptions` | `Object` | `{}` | No | Fetch request options |
| `transformer` | `Function` | `null` | No | Response data transformer |
| `isEmpty` | `Function` | `null` | No | Custom empty check function |
| `skeleton` | `Boolean` | `false` | No | Use skeleton loading |
| `skeletonRows` | `Number` | `4` | No | Number of skeleton rows |
| `loadingText` | `String` | `''` | No | Custom loading text |
| `retryable` | `Boolean` | `true` | No | Show retry button on error |
| `retryText` | `String` | `''` | No | Custom retry text |
| `errorTitle` | `String` | `''` | No | Custom error title |
| `errorMessage` | `String` | `''` | No | Custom error message |
| `emptyIcon` | `String` | `'inbox'` | No | Empty state icon |
| `emptyTitle` | `String` | `''` | No | Custom empty title |
| `emptyMessage` | `String` | `''` | No | Custom empty message |

## Emits

None - uses slot for data rendering.

## Requirements

- **Pinia Store**: Uses `useGenericStore` for language state
- **Locale Files**: Imports `en.json` / `it.json`
- **Material Icons**: Requires Material Icons Round font

## Usage

```vue
<DataLoader
  url="/api/data"
  :transformer="transformData"
  :skeleton="true"
  v-slot="{ data }"
>
  <MyComponent :data="data" />
</DataLoader>
```

## States

- **loading**: Spinner or skeleton rows
- **error**: Error message with retry button
- **empty**: Empty state with icon/message
- **success**: Shows slot with data

## Features

- Auto fetch on mount
- Retry on error
- Skeleton loading animation
- Custom transformer
- Custom empty check
- Localized text via locale files