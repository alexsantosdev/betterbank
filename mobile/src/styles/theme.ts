import { extendTheme } from 'native-base'

export const THEME = extendTheme({
  colors: {
    gray: {
      900: '#29292E',
      400: '#5F5E5E',
      350: '#727278',
      300: '#858585',
      200: '#A4A4A4',
    },
    green: {
      200: '#5CA28A'
    },
    blue: {
        500: '#3156ED',
        100: '#A1A2BD'
    },
    red: {
      200: '#E07371',
    },
    white: '#FFFFFF'
  },
  fonts: {
    heading: 'Inter_700Bold',
    body: 'Inter_400Regular',
    medium: 'Inter_500Medium'
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
  sizes: {
    14: 56,
    22: 87
  }
})