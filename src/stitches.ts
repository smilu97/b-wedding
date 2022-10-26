import { createStitches, globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },
});

export const { styled, css } = createStitches({
  theme: {},
});
