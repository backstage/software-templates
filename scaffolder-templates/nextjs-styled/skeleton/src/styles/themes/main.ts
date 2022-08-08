import { transparentize } from 'polished'
import {
  animations,
  animationTimings,
  breakpoints,
  colors,
  effects,
  layers,
  shapes,
  spacings,
  typography,
  transitions,
} from '@/styles/tokens'

export const theme = {
  title: 'main',
  colors: {
    primary: {
      lighter: colors.blue['200'],
      light: colors.blue['400'],
      main: colors.blue['500'],
      dark: colors.blue['600'],
      darker: colors.blue['700'],
      hover: transparentize(0.85, colors.blue['400']),
      active: transparentize(0.85, colors.blue['400']),
    },
    secondary: {
      lighter: colors.yellow['200'],
      light: colors.yellow['400'],
      main: colors.yellow['500'],
      dark: colors.yellow['600'],
      darker: colors.yellow['800'],
    },
    neutral: {
      white: colors.white,
      lighter: colors.gray['200'],
      light: colors.gray['400'],
      main: colors.gray['500'],
      dark: colors.gray['600'],
      darker: colors.gray['800'],
    },
    text: {
      light: colors.white,
      main: colors.gray['600'],
      dark: colors.gray['800'],
      contrast: colors.blue['500'],
      error: colors.red['500'],
      success: colors.green['500'],
      warn: colors.gold['500'],
    },

    success: {
      light: colors.green['400'],
      main: colors.green['500'],
      dark: colors.green['600'],
    },
    warning: {
      light: colors.gold['400'],
      main: colors.gold['500'],
      dark: colors.gold['600'],
      darker: colors.gold['800'],
    },
    error: {
      light: colors.red['400'],
      main: colors.red['500'],
      dark: colors.red['600'],
    },
    background: {
      light: {
        level: {
          1: colors.blue['500'],
          2: colors.gray['200'],
          3: colors.white,
        },
      },

      dark: {
        level: {
          1: colors.blue['500'],
          2: colors.blue['900'],
          3: colors.blue['800'],
        },
      },
    },
  },
  animations,
  animationTimings,
  breakpoints,
  effects,
  layers,
  spacings,
  shapes,
  typography,
  transitions,
} as const
