import { styled } from '../../stitches';
import PageTitle from '../../components/PageTitle';
import { galleryImagesWithId } from './images';

const RootContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '5rem auto',
});

const HostMessage = styled('p', {
  margin: '3rem 0',
  fontSize: '0.875rem',
  fontWeight: '800',
  color: '$primary400',
  letterSpacing: '0.1em',
});

const GalleryWrap = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-betweeen',
  alignItems: 'flex-start',
  width: '20rem',
  height: 'auto',
});

const ImageWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'center',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  width: 'calc(50% -  0.75rem)',
  height: '13.875rem',
  verticalAlign: 'top',
  overflow: 'hidden',
  borderRadius: '1.5rem',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  '&:nth-child(2n)': {
    marginRight: '0',
  },
});

export default function Gallery() {
  return (
    <RootContainer>
      <PageTitle>Gallery</PageTitle>
      <HostMessage>2023년 3월 25일</HostMessage>
      <GalleryWrap>
        {galleryImagesWithId.map(([backgroundImage, id]) => (
          <ImageWrap key={id} style={{ backgroundImage }} />
        ))}
      </GalleryWrap>
    </RootContainer>
  );
}
