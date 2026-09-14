# Tailwind CSS setup

This feature configures Tailwind CSS for this package. It imports required stylesheets and sets up content scanning.

The single file is `app/assets/css/tailwind.css`. It does three things:

1. Imports the Tailwind CSS core with `@import 'tailwindcss'`.
2. Imports `@nuxt/ui` styles with `@import '@nuxt/ui'`.
3. Configures Tailwind's content scanner to scan files in the app directory tree with `@source '../..'`.

This setup makes Tailwind utilities and `@nuxt/ui` components available throughout the package. All Vue components in `app/` can use Tailwind classes and `@nuxt/ui` styling.
