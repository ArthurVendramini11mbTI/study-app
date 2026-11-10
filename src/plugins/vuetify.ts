/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from 'vuetify'

import { VProgress } from 'vuetify/labs/VProgress'
import { VSparkline } from 'vuetify/components/VSparkline'
// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { vuetifyThemes } from '@/themes/palettes'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
const vuetify = createVuetify({
  theme: {
    defaultTheme: 'blue',
    themes: vuetifyThemes,
  },

  components:{
    VProgress
  }
})

export default vuetify
