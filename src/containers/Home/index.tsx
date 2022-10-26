import { styled } from '@stitches/react';

const RootContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const DomainContainer = styled('div', {
  variants: {
    bgColor: {
      100: { backgroundColor: '#FFDDA1' },
      200: { backgroundColor: '#FFD151' },
      300: { backgroundColor: '#F8C537' },
      400: { backgroundColor: '#EDB230' },
      500: { backgroundColor: '#E77728' },
    },
  },
  minHeight: '20rem',
  transition: 'background-color 500ms',
  '&:hover': { backgroundColor: 'white' },
});

export default function Home() {
  return (
    <RootContainer>
      <DomainContainer bgColor={100} />
      <DomainContainer bgColor={200} />
      <DomainContainer bgColor={300} />
      <DomainContainer bgColor={400} />
      <DomainContainer bgColor={500} />
    </RootContainer>
  );
}
