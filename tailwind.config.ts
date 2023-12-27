import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: ['./src/**/*.{tsx,mdx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: 'white',
      black: 'black',
      current: 'currentColor',
      primary: colors.sky,
      secondary: colors.amber,
      info: colors.sky,
      success: colors.teal,
      warning: colors.amber,
      danger: colors.red,
      neutral: colors.slate,
    },
  },
  safelist: [
    {
      pattern:
        /bg-(primary|secondary|info|success|warning|danger|neutral)-\d{3}/,
    },
  ],
  plugins: [require('@tailwindcss/forms')],
};
export default config;
