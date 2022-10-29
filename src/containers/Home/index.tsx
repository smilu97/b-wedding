import { styled } from '../../stitches';

import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';

const RootContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

const BlankSpace = styled('div', {
  width: '100%',
  height: '5rem',
});

export default function Home() {
  return (
    <RootContainer>
      <FirstSection />
      <BlankSpace />
      <SecondSection />
      <BlankSpace />
      <ThirdSection />
      <BlankSpace />
    </RootContainer>
  );
}
