import { readonly, ref } from 'vue'
import vuetify from '@/plugins/vuetify'
import { isThemeName, type ThemeName } from '@/themes/palettes'

const activeTheme = ref<ThemeName>('blue')

export function applyTheme(theme: ThemeName) {
  activeTheme.value = theme
  vuetify.theme.global.name.value = theme
}

export function applyThemeFromUnknown(theme: unknown) {
  applyTheme(isThemeName(theme) ? theme : 'blue')
}

export function useActiveTheme() {
  return readonly(activeTheme)
}
