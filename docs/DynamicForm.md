# DynamicForm

Dynamic form builder with many field types.

## Props

| Prop | Type | Default | Required | Description |
|------|------|--------|---------|-------------|
| `fields` | `Array` | - | Yes | Array of field definitions |
| `submitText` | `String` | `'Submit'` | No | Submit button text |
| `loading` | `Boolean` | `false` | No | Loading state |
| `showCancel` | `Boolean` | `false` | No | Show cancel button |
| `cancelText` | `String` | `'Cancel'` | No | Cancel button text |

### Field Types

| Type | Description |
|------|-------------|
| `text` | InputText |
| `email` | InputText (email) |
| `password` | InputText (password) |
| `number` | InputNumber |
| `textarea` | Textarea |
| `select` | Select dropdown |
| `searchable-select` | AutoComplete |
| `checkbox` | Checkbox |
| `toggle` | ToggleSwitch |
| `date` | DatePicker |
| `time` | TimePicker |
| `datetime` | DateTimePicker |
| `file` | FileUpload |
| `divider` | Section divider |
| `radio` | RadioButton |
| `rating` | Rating |

### Field Structure

```javascript
{
  name: String,           // field key (required)
  type: String,          // field type (required)
  label: String,         // display label
  required: Boolean,    // required validation
  placeholder: String,  // placeholder text
  options: Array,       // for select/radio
  min: Number,         // min value
  max: Number,         // max value
  minLength: Number,    // min length
  maxLength: Number,   // max length
  pattern: String,     // regex pattern
  fullWidth: Boolean, // full width field
  disabled: Boolean,  // disabled state
  hint: String,      // hint text
  icon: String,     // icon name
  rows: Number,    // textarea rows
  autoResize: Boolean, // textarea auto resize
  accept: String,  // file accept types
  maxSize: Number, // file max size (MB)
}
```

## Emits

| Event | Payload | Description |
|-------|---------|-------------|
| `submit-form` | `Object` | Form data |
| `cancel` | - | Cancel clicked |

## Requirements

- **Pinia Store**: Uses `useGenericStore` for language state
- **Locale Files**: Imports `en.json` / `it.json`
- **PrimeVue**: Uses PrimeVue components

## Usage

```vue
<DynamicForm
  :fields="[
    { name: 'email', type: 'email', label: 'Email', required: true },
    { name: 'role', type: 'select', label: 'Role', options: [...] }
  ]"
  submit-text="Save"
  @submit-form="handleSubmit"
/>
```

## Features

- Many field types
- Client-side validation
- File upload with preview
- Searchable select
- Date/time pickers
- Custom validators
- Error display
- Full i18n support