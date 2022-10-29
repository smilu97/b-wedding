import { styled } from '../../stitches';

const ButtonContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '1rem',
  width: '56px',
  height: '56px',
});

const IconImageWrap = styled('div', {
  width: '24px',
  height: '24px',
});

export default function TabNav({ children }: any) {
  return (
    <ButtonContainer>
      <IconImageWrap>{children}</IconImageWrap>
    </ButtonContainer>
  );
}
