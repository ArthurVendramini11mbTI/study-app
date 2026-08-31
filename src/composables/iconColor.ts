export function getIconColor(color: string) {
  return color.startsWith('#')
    ? color
    : `rgb(var(--v-theme-${color}))`
}
