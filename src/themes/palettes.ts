import type { ThemeDefinition } from 'vuetify'

export const themeNames = ['blue', 'emerald', 'crimson', 'violet', 'amber'] as const

export type ThemeName = typeof themeNames[number]

type PaletteDefinition = {
  label: string
  description: string
  swatches: [string, string, string]
  theme: ThemeDefinition
}

const statusColors = {
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#38BDF8',
}

function createPalette(colors: Record<string, string>): ThemeDefinition {
  return {
    dark: true,
    colors: {
      ...statusColors,
      ...colors,
      'on-primary': '#FFFFFF',
      'on-secondary': '#FFFFFF',
    },
  }
}

export const palettes: Record<ThemeName, PaletteDefinition> = {
  blue: {
    label: 'Blue',
    description: 'Calm, focused and familiar.',
    swatches: ['#3B82F6', '#60A5FA', '#10243A'],
    theme: createPalette({
      background: '#08111F', 'background-soft': '#0C1A2C', surface: '#10243A', 'surface-strong': '#081B33',
      primary: '#3B82F6', secondary: '#60A5FA', accent: '#38BDF8',
      'button-primary': '#3B82F6', 'button-secondary': '#1E3A5F',
      title: '#EFF6FF', subtitle: '#BFDBFE', text: '#E5EEF9', muted: '#93AFCF', border: '#54769D',
      'on-background': '#EFF6FF', 'on-surface': '#EFF6FF',
    }),
  },
  emerald: {
    label: 'Emerald',
    description: 'Balanced, fresh and restorative.',
    swatches: ['#10B981', '#34D399', '#102A22'],
    theme: createPalette({
      background: '#071713', 'background-soft': '#0B211B', surface: '#102A22', 'surface-strong': '#092219',
      primary: '#10B981', secondary: '#34D399', accent: '#2DD4BF',
      'button-primary': '#10B981', 'button-secondary': '#164E3B',
      title: '#ECFDF5', subtitle: '#A7F3D0', text: '#E0F5EB', muted: '#8CC7AD', border: '#437E66',
      'on-background': '#ECFDF5', 'on-surface': '#ECFDF5',
    }),
  },
  crimson: {
    label: 'Crimson',
    description: 'Bold, energetic and determined.',
    swatches: ['#F43F5E', '#FB7185', '#32131A'],
    theme: createPalette({
      background: '#1A0A0E', 'background-soft': '#251016', surface: '#32131A', 'surface-strong': '#260B12',
      primary: '#F43F5E', secondary: '#FB7185', accent: '#FDA4AF',
      'button-primary': '#F43F5E', 'button-secondary': '#4C1D2A',
      title: '#FFF1F2', subtitle: '#FECDD3', text: '#F9E5E8', muted: '#D59AA5', border: '#98505E',
      'on-background': '#FFF1F2', 'on-surface': '#FFF1F2',
    }),
  },
  violet: {
    label: 'Violet',
    description: 'Creative, deep and expressive.',
    swatches: ['#8B5CF6', '#A78BFA', '#24173B'],
    theme: createPalette({
      background: '#120B20', 'background-soft': '#1A102D', surface: '#24173B', 'surface-strong': '#190D30',
      primary: '#8B5CF6', secondary: '#A78BFA', accent: '#C4B5FD',
      'button-primary': '#8B5CF6', 'button-secondary': '#3B2760',
      title: '#F5F3FF', subtitle: '#DDD6FE', text: '#ECE8FA', muted: '#B2A5D4', border: '#6D5A98',
      'on-background': '#F5F3FF', 'on-surface': '#F5F3FF',
    }),
  },
  amber: {
    label: 'Amber',
    description: 'Warm, optimistic and grounded.',
    swatches: ['#F59E0B', '#FBBF24', '#30230F'],
    theme: createPalette({
      background: '#191207', 'background-soft': '#251B0B', surface: '#30230F', 'surface-strong': '#211604',
      primary: '#F59E0B', secondary: '#FBBF24', accent: '#FCD34D',
      'button-primary': '#F59E0B', 'button-secondary': '#4A3514',
      title: '#FFFBEB', subtitle: '#FDE68A', text: '#F8F0D7', muted: '#C8B77D', border: '#8B7138',
      'on-background': '#FFFBEB', 'on-surface': '#FFFBEB',
    }),
  },
}

export function isThemeName(value: unknown): value is ThemeName {
  return typeof value === 'string' && themeNames.includes(value as ThemeName)
}

export const vuetifyThemes = Object.fromEntries(
  themeNames.map((name) => [name, palettes[name].theme]),
) as Record<ThemeName, ThemeDefinition>
