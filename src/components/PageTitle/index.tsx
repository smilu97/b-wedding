import { styled } from '../../stitches';

const ContentsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const TitleTxt = styled('h1', {
  fontSize: '1.5rem',
  fontWeight: '800',
  color: '$primary400',
  lineHeight: '2',
  letterSpacing: '0.15rem',
  textAlign: 'center',
});

const UnderBar = styled('div', {
  marginTop: '1rem',
  width: '3.75rem',
  height: '1px',
  backgroundColor: '$primary400',
});

export default function PageTitle({ children }: any) {
  return (
    <ContentsContainer>
      <TitleTxt>{children}</TitleTxt>
      <UnderBar />
    </ContentsContainer>
  );
}
