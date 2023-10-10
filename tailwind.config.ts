import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        dm: ['"DM Sans"', ...defaultTheme.fontFamily.sans]
      },
      colors:{
        primary: '#181717',
        secondary: '#606060',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
} satisfies Config