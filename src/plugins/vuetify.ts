/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from 'vuetify'

import { VProgress } from 'vuetify/labs/VProgress'
// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'axisBlue',

    themes: {
      axisBlue: {
        dark: true,

        colors: {
          background: '#0b1f3a',
          surface: '#12345b',

          primary: '#3b82f6',
          secondary: '#60a5fa',
          accent: '#38bdf8',

          'on-background': '#eff6ff',
          'on-surface': '#eff6ff',

          muted: '#bfdbfe',

          success: '#22c55e',
          warning: '#facc15',
          error: '#ef4444',
          info: '#38bdf8',
        },
      },
    },
  },

  components:{
    VProgress
  }
})
