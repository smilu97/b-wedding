import { createStitches } from '@stitches/react';

export const { styled, css, globalCss } = createStitches({
  theme: {
    colors: {
      primary100: '#F4F1ED',
      primary150: '#DDD0C4',
      primary200: '#AD9464',
      primary300: '#846428',
      primary400: '#483F32',
      primary500: '#C1B4A1',
      primary700: '#785A2E',
      primary800: '#B5A79B',
      baseBg: '$primary400',
      contentBg: '$primary100',
      divider: '#C1B4A1',
    },
    sizes: {
      mincw: '20rem',
      cw: '48rem',
      tabHeight: '6.25rem',
    },
    space: {
      tabHeight: '6.25rem',
    },
  },
});

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    fontFamily: "'Nanum Myeongjo', 'Nanum Square', serif",
    fontSize: '16px',
  },
  body: {
    minWidth: '$mincw',
    backgroundColor: '$baseBg',
  },
  html: {
    minWidth: '$mincw',
  },
  '#root': {
    minWidth: '$mincw',
  },
});
