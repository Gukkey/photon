import { env } from '$env/dynamic/public'
import type { Theme, ThemeColors } from './colors'

export function getDefaultColors(): ThemeColors {
  return env.PUBLIC_THEME
    ? JSON.parse(env.PUBLIC_THEME)
    : {
        slate: {
          25: '252 253 254',
          50: '248 250 252',
          100: '241 245 249',
          200: '226 232 240',
          300: '203 213 225',
          400: '148 163 184',
          500: '100 116 139',
          600: '71 85 105',
          700: '51 65 85',
          800: '30 41 59',
          900: '15 23 42',
          950: '2 6 23',
        },
        zinc: {
          50: '250 253 255',
          100: '243 244 246',
          300: '209 213 219',
          400: '156 163 175',
          500: '107 114 128',
          600: '75 85 99',
          700: '55 65 81',
          800: '22 31 45',
          900: '12 18 32',
          925: '8 12 25',
          950: '3 7 18',
        },
        primary: {
          100: '241 245 249',
          900: '15 23 42',
        },
        other: {
          black: `0 0 0`,
          white: `255 255 255`,
        },
      }
}

export function getDefaultTheme(): Theme {
  return {
    id: 0,
    colors: getDefaultColors(),
    name: 'Default',
  }
}

export const presets: Theme[] = [
  getDefaultTheme(),
  {
    colors: {
      slate: {
        25: '252 253 254',
        50: '248 250 252',
        100: '241 245 249',
        200: '226 232 240',
        300: '203 213 225',
        400: '148 163 184',
        500: '100 116 139',
        600: '71 85 105',
        700: '51 65 85',
        800: '30 41 59',
        900: '15 23 42',
        950: '2 6 23',
      },
      zinc: {
        50: '250 250 250',
        100: '244 244 245',
        200: '228 228 231',
        300: '212 212 216',
        400: '161 161 170',
        500: '113 113 122',
        600: '82 82 91',
        700: '52 52 59',
        800: '31 31 36',
        900: '18 18 21',
        925: '12 12 14',
        950: '9 9 11',
      },
      primary: {
        100: '241 245 249',
        900: '15 23 42',
      },
      other: {
        black: '0 0 0',
        white: '255 255 255',
      },
    },
    id: -1,
    name: 'Classic',
  },
  {
    colors: {
      slate: {
        25: '252 253 254',
        50: '248 250 252',
        100: '241 245 249',
        200: '226 232 240',
        300: '203 213 225',
        400: '148 163 184',
        500: '100 116 139',
        600: '71 85 105',
        700: '51 65 85',
        800: '30 41 59',
        900: '15 23 42',
        950: '2 6 23',
      },
      zinc: {
        50: `249 250 251`,
        100: `243 244 246`,
        200: `229 231 235`,
        300: `209 213 219`,
        400: `156 163 175`,
        500: `107 114 128`,
        600: `75 85 99`,
        700: '30 30 30',
        800: '22 22 22',
        900: '10 10 10',
        925: '0 0 0',
        950: `0 0 0`,
      },
      primary: {
        100: '241 245 249',
        900: '15 23 42',
      },
      other: {
        black: `0 0 0`,
        white: `255 255 255`,
      },
    },
    id: -2,
    name: 'AMOLED',
  },
  {
    colors: {
      zinc: {
        '50': '205 214 244',
        '100': '186 194 222',
        '200': '166 173 200',
        '300': '147 153 178',
        '400': '127 132 156',
        '500': '108 112 134',
        '600': '88 91 112',
        '700': '69 71 90',
        '800': '49 50 68',
        '900': '30 30 46',
        '925': '24 24 37',
        '950': '17 17 27',
      },
      primary: { '100': '166 227 161', '900': '114 135 253' },
      other: { white: '239 241 245' },
      slate: {
        '25': '239 241 245',
        '50': '230 233 239',
        '100': '220 224 232',
        '200': '204 208 218',
        '300': '188 192 204',
        '400': '172 176 190',
        '500': '140 143 161',
        '600': '124 127 147',
        '700': '108 111 133',
        '800': '92 95 119',
        '900': '76 79 105',
        '950': '76 79 105',
      },
    },
    id: -3,
    name: 'Catppuccin',
  },
]
