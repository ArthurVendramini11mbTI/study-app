/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from 'vuetify'
// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'axisOrange',

    themes: {
      axisOrange: {
        dark: true,

        colors: {
          background: '#d93605',
          surface: '#7c2508',

          primary: '#f97316',
          secondary: '#fb923c',
          accent: '#fbbf24',

          'on-background': '#fff7ed',
          'on-surface': '#fff7ed',

          muted: '#ffd4b5',

          success: '#22c55e',
          warning: '#fbbf24',
          error: '#ef4444',
          info: '#38bdf8',
        },
      },
    },
  },
})