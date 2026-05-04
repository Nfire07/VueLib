# Animate

Transition wrapper component with preset animations for Vue.js.

## Props

| Prop | Type | Default | Required | Description |
|------|------|--------|---------|-------------|
| `name` | `String` | `'fade'` | No | Animation preset: `'fade'`, `'slide-up'`, `'slide-down'`, `'slide-left'`, `'slide-right'`, `'scale'`, `'scale-fade'`, `'flip-x'`, `'flip-y'`, or custom `'custom-*'` |
| `mode` | `String` | `'out-in'` | No | Transition mode: `'out-in'`, `'in-out'`, `'default'` |
| `appear` | `Boolean` | `false` | No | Animate on initial render |
| `duration` | `Number` / `Object` | `null` | No | Transition duration in ms (`{ enter: 300, leave: 200 }` for separate timings) |
| `delay` | `Number` | `0` | No | Delay before animation starts (ms) |
| `easing` | `String` | `'ease'` | No | CSS easing function |
| `distance` | `String` / `Number` | `16` | No | Slide distance in px (or CSS value) |
| `onBeforeEnter` | `Function` | `null` | No | JS hook: before enter |
| `onEnter` | `Function` | `null` | No | JS hook: enter |
| `onAfterEnter` | `Function` | `null` | No | JS hook: after enter |
| `onBeforeLeave` | `Function` | `null` | No | JS hook: before leave |
| `onLeave` | `Function` | `null` | No | JS hook: leave |
| `onAfterLeave` | `Function` | `null` | No | JS hook: after leave |

## Usage

```vue
<!-- Basic fade (default) -->
<Animate>
  <div v-if="show">Content</div>
</Animate>

<!-- Slide up with delay -->
<Animate name="slide-up" :delay="200">
  <div v-if="show">Slides up</div>
</Animate>

<!-- Scale with custom duration -->
<Animate name="scale" :duration="400">
  <div v-if="show">Scales in</div>
</Animate>

<!-- Flip X with custom easing -->
<Animate name="flip-x" easing="cubic-bezier(0.34, 1.56, 0.64, 1)">
  <div v-if="show">Flips horizontally</div>
</Animate>

<!-- With JS hooks -->
<Animate
  name="slide-right"
  :on-before-enter="beforeEnter"
  :on-enter="onEnter"
  :on-after-enter="afterEnter"
>
  <div v-if="show">With hooks</div>
</Animate>
```

## Presets

| Preset | Description |
|--------|-------------|
| `fade` | Opacity fade in/out |
| `slide-up` | Slides up from bottom + fade |
| `slide-down` | Slides down from top + fade |
| `slide-left` | Slides in from right + fade |
| `slide-right` | Slides in from left + fade |
| `scale` | Scales from 0.92 + fade |
| `scale-fade` | Scales from 0.96 + fade |
| `flip-x` | 3D flip on X axis |
| `flip-y` | 3D flip on Y axis |

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--an-duration-enter` | `220ms` | Enter animation duration |
| `--an-duration-leave` | `180ms` | Leave animation duration |
| `--an-delay` | `0ms` | Animation delay |
| `--an-easing` | `ease` | Easing function |
| `--an-distance` | `16px` | Slide distance |

## Features

- 9 preset animations (fade, slides, scales, flips)
- Custom preset support (`custom-*` prefix)
- Configurable mode, duration, delay, easing
- JS transition hooks support
- 3D perspective for flip animations
- CSS variables for global customization
- `appear` support for initial render
