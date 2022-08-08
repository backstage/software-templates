export const typography = {
  family: {
    primary:
      "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },
  lineHeight: {
    none: 1,
    tight: 1.24,
    snug: 1.32,
    normal: 1.5,
    relaxed: 1.64,
    loose: 2,
  },
  sizes: {
    xs: '1.2rem',
    sm: '1.4rem',
    md: '1.6rem',
    lg: '1.8rem',
    xl: '2.4rem',
    '2xl': '3.6rem',
    '3xl': '4.8rem',
    '4xl': '5.6rem',
  },
  spacing: {
    wide: 0.03,
  },
  textTransform: {
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    capitalize: 'capitalize',
    'normal-case': 'none',
  },
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
} as const
