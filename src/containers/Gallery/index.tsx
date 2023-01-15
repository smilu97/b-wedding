import { styled } from '../../stitches';
import PageTitle from '../../components/PageTitle';
import { galleryImagesWithId } from './images';
import CloseIcon from '../../components/icons/CloseIcon';
import GalleryImg1 from '../../assets/gallery/gallery_1.jpg';

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
  marginRight: '1rem',
  marginBottom: '1rem',
  width: 'calc(50% -  0.5rem)',
  height: '13.875rem',
  verticalAlign: 'top',
  overflow: 'hidden',
  borderRadius: '1.5rem',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  cursor: 'pointer',
  '&:nth-child(2n)': {
    marginRight: '0',
  },
});

const LightBoxWrap = styled('div', {
  position: 'fixed',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  zIndex: '100000000',
});

const CloseButton = styled('div', {
  position: 'fixed',
  top: '1.25rem',
  right: '1.25rem',
  width: '2rem',
  height: '2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const LightBoxIamge = styled('div', {
  width: '100%',
  height: 'calc(100% - 9rem)',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
});

export default function Gallery() {
  return (
    <RootContainer>
      <LightBoxWrap>
        <CloseButton>
          <CloseIcon color="#ffffff" />
        </CloseButton>
        <LightBoxIamge style={{ backgroundImage: `url(${GalleryImg1})` }} />
      </LightBoxWrap>
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
