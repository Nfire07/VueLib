# DataLoader

Data fetching component with loading states (loading, error, empty, success). Supports both URL fetching and async function execution.

## Props

| Prop | Type | Default | Required | Description |
|------|------|--------|---------|-------------|
| `url` | `String` | `''` | No | API endpoint URL (optional if using asyncFn) |
| `fetchOptions` | `Object` | `{}` | No | Fetch request options |
| `actionFn` | `Function` | `null` | No | Async function to execute for data loading |
| `actionPayload` | `Any` | `undefined` | No | Parameter(s) to pass to actionFn (auto-triggers reload on change) |
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

## Usage with URL
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

## Usage with Async Function (Supabase Example)

```vue
<template>
  <DataLoader
    :action-fn="supabaseConnector.signInWithEmail"
    :action-payload="[{ email: email, password: password }]"
    :immediate="false"
    loading-text="Signing in..."
    @success="onLoginSuccess"
    @error="onLoginError"
  >
    <template #default>
      <form @submit.prevent="triggerLogin">
        <input v-model="email" type="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
    </template>
  </DataLoader>
</template>

<script>
import { useSupabaseConnector } from '@/stores/supabaseConnector';
import DataLoader from '@/components/DataLoader.vue';
import { ref } from 'vue';

export default {
  components: { DataLoader },
  setup() {
    const supabaseConnector = useSupabaseConnector();
    const email = ref('');
    const password = ref('');

    const triggerLogin = () => {
      // Trigger the DataLoader to execute the async function
      // You can access the DataLoader via ref and call its load() method
    };

    return { supabaseConnector, email, password, triggerLogin };
  }
};
</script>
```

## States

- **idle**: Waiting for manual trigger (when `immediate=false`)
- **loading**: Spinner or skeleton rows with shimmer
- **error**: Error icon with message and retry button
- **empty**: Empty state with icon and message
- **success**: Shows default slot with data

## Exposed API (via `ref`)

| Property | Type | Description |
|----------|------|-------------|
| `load(payload?)` | `Function` | Manually trigger data loading |
| `state` | `String` | Current state (`'idle'`, `'loading'`, `'error'`, `'empty'`, `'success'`) |
| `data` | `any` | Loaded data |

## Features

- Auto fetch on mount (URL or actionFn) when `immediate=true`
- Manual trigger via `ref.load()` when `immediate=false`
- Watch `actionPayload` and auto-reload on change
- Retry on error
- Skeleton loading with staggered animation
- Custom data transformer function
- Custom empty check function
- Localized text via store
- Async function execution support
- AbortController support (cancels previous request)
