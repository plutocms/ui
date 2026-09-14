# PostTitleInput component

This feature is a Vue 3 controlled input component. Use it for post and article titles.

It exports one component: `PostTitleInput.vue`.

## Props

- `placeholder` (optional `string`): the input placeholder text. Defaults to `'Add title'`.

## v-model

Bind a `string` to the component with `v-model`. It two-way binds the input value.

## Styling

The component uses Tailwind CSS. It applies these styles:

- Large text: `text-4xl font-bold`
- Padding: `px-8 pt-8`
- Color: `text-zinc-600` in light mode, `text-zinc-400` in dark mode
- On focus: color shifts to white in dark mode
- Cursor: pointer at rest, text cursor on focus
- No outline

The component renders an edit icon (lucide:edit) on the right side. The icon fades out when the input receives focus.

## Attributes

The component uses `inheritAttrs: false`. You can pass standard HTML input attributes through with `v-bind`. The component forwards all unregistered attributes to the underlying input element via `v-bind="$attrs"`.

## Autofocus

The component applies the `v-autofocus` directive. The input receives focus automatically on mount.
