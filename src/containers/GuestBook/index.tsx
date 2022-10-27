import { styled } from '../../stitches';

const RootContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const Dummy = styled('div', {
  height: '300px',
  width: '100%',
  variants: {
    type: {
      1: { backgroundColor: '$primary150' },
      2: { backgroundColor: '$primary200' },
      3: { backgroundColor: '$primary300' },
      4: { backgroundColor: '$primary400' },
    },
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '32px',
  fontWeight: 'bold',
});

export default function GuestBook() {
  return (
    <RootContainer>
      <Dummy type={1}>GuestBook</Dummy>
      <Dummy type={2}>GuestBook</Dummy>
      <Dummy type={3}>GuestBook</Dummy>
      <Dummy type={4}>GuestBook</Dummy>
    </RootContainer>
  );
}
