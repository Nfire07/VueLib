# DynamicForm

Dynamic form builder with many field types using PrimeVue.

## Props

| Prop | Type | Default | Required | Description |
|------|------|--------|---------|-------------|
| `fields` | `Array` | - | Yes | Array of field definitions |
| `submitText` | `String` | `''` | No | Submit button text |
| `loading` | `Boolean` | `false` | No | Loading state |

### Field Types

| Type | Component |
|------|----------|
| `text` | InputText |
| `email` | InputText (email validation) |
| `password` | InputText with toggle |
| `number` | InputText |
| `textarea` | Textarea |
| `select` | Select dropdown |
| `searchable-select` | AutoComplete |
| `multiselect` | MultiSelect |
| `checkbox` | Checkbox |
| `toggle` | ToggleSwitch |
| `radio` | RadioButton |
| `range` | Slider |
| `date` | DatePicker |
| `time` | InputText |
| `datetime-local` | InputText |
| `month` | InputText |
| `week` | InputText |
| `color` | ColorPicker |
| `file` | File input |
| `tags` | Chips/Tags input |
| `divider` | Section divider |

### Field Structure

```javascript
{
  name: String,         // field key (required)
  type: String,        // field type (required)
  label: String,       // display label
  required: Boolean,    // required validation
  placeholder: String, // placeholder text
  hint: String,        // hint text
  icon: String,        // icon name
  options: Array,       // for select/radio/multiselect [{ label, value }]
  defaultValue: Any,    // default value
  min: Number,         // min value
  max: Number,         // max value
  step: Number,        // step increment
  minLength: Number,   // min length validation
  maxLength: Number,   // max length / char limit
  pattern: String,     // regex pattern
  patternMessage: String, // pattern error message
  validate: Function, // custom validator
  rows: Number,       // textarea rows
  autoResize: Boolean, // textarea auto resize
  accept: String,      // file accept types
  multiple: Boolean, // file multiple
  fullWidth: Boolean, // full width field
  maxSelectedLabels: Number, // multiselect labels shown
  labels: Array,       // range slider labels
  errorMessage: String // custom error message
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `submit-form` | `Object` | Form data object |

## Usage

```vue
<DynamicForm
  :fields="[
    { name: 'email', type: 'email', label: 'Email', required: true },
    { name: 'password', type: 'password', label: 'Password', required: true },
    { name: 'role', type: 'select', label: 'Role', options: [{ label: 'Admin', value: 'admin' }] },
    { name: 'tags', type: 'tags', label: 'Tags' }
  ]"
  submit-text="Save"
  @submit-form="handleSubmit"
/>
```

## Features

- 20+ field types
- Client-side validation (required, email, number, pattern, custom)
- Password visibility toggle
- File upload with selection display
- Searchable select with filtering
- Date/time pickers
- Color picker with hex display
- Tags/chips input
- Slider with labels
- Character counter for textarea
- Error display with animation