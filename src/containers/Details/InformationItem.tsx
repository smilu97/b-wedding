import { styled } from '../../stitches';

const ItemContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginBottom: '2rem',
});

const ItemTitleTxt = styled('h5', {
  marginBottom: '0.75rem',
  fontSize: '0.812rem',
  fontWeight: '800',
  color: '$primary400',
  letterSpacing: '0.1rem',
});

const ItemContentsTxt = styled('p', {
  fontSize: '0.812rem',
  fontWeight: '400',
  color: '$primary300',
  letterSpacing: '0.1rem',
  lineHeight: '1.3rem',
});

export default function InformationItem({ titleTxt, children }: any) {
  return (
    <ItemContainer>
      <ItemTitleTxt>{titleTxt}</ItemTitleTxt>
      <ItemContentsTxt>{children}</ItemContentsTxt>
    </ItemContainer>
  );
}
