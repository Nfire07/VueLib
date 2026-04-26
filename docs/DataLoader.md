# DataLoader

Data fetching component with loading states (loading, error, empty, success).

## Props

| Prop | Type | Default | Required | Description |
|------|------|--------|---------|-------------|
| `url` | `String` | - | Yes | API endpoint URL |
| `fetchOptions` | `Object` | `{}` | No | Fetch request options |
| `transformer` | `Function` | `null` | No | Response data transformer function |
| `isEmpty` | `Function` | `null` | No | Custom empty check function |
| `skeleton` | `Boolean` | `false` | No | Use skeleton loading animation |
| `skeletonRows` | `Number` | `4` | No | Number of skeleton rows |
| `loadingText` | `String` | `''` | No | Custom loading text |
| `retryable` | `Boolean` | `true` | No | Show retry button on error |
| `retryText` | `String` | `''` | No | Custom retry text |
| `errorTitle` | `String` | `''` | No | Custom error title |
| `errorMessage` | `String` | `''` | No | Custom error message |
| `emptyIcon` | `String` | `'inbox'` | No | Empty state icon name |
| `emptyTitle` | `String` | `''` | No | Custom empty title |
| `emptyMessage` | `String` | `''` | No | Custom empty message |
| `immediate` | `Boolean` | `true` | No | Fetch on mount |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `success` | `any` | Data loaded successfully |
| `error` | `String` | Fetch error message |
| `empty` | `any` | Empty response |

## Usage

```vue
<DataLoader
  url="/api/data"
  :transformer="transformData"
  :skeleton="true"
>
  <template #default="{ data }">
    <MyComponent :data="data" />
  </template>
</DataLoader>
```

## States

- **loading**: Spinner or skeleton rows with shimmer
- **error**: Error icon with message and retry button
- **empty**: Empty state with icon and message
- **success**: Shows default slot with data

## Features

- Auto fetch on mount
- Retry on error
- Skeleton loading with staggered animation
- Custom data transformer function
- Custom empty check function
- Localized text via store