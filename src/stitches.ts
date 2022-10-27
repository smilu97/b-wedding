import { createStitches } from '@stitches/react';

export const { styled, css, globalCss } = createStitches({
  theme: {
    colors: {
      primary100: '#F4F1ED',
      primary150: '#DDD0C4',
      primary200: '#AD9464',
      primary300: '#846428',
      primary400: '#483F32',
      baseBg: '$primary400',
      contentBg: '$primary100',
      divider: '#C1B4A1',
    },
    sizes: {
      cw: '375px',
      tabHeight: '100px',
    },
    space: {
      tabHeight: '100px',
    },
  },
});

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    fontFamily: "'Nanum Myeongjo', 'Nanum Square', serif",
  },
  body: {
    backgroundColor: '$baseBg',
  },
});
