import { styled } from '../../stitches';
import PageTitle from '../../components/PageTitle';
import { galleryImagesWithId } from './images';
import CloseIcon from '../../components/icons/CloseIcon';
import GalleryImg1 from '../../assets/gallery/gallery_1.jpg';
import { Link, Outlet } from 'react-router-dom';

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

const ImageLink = styled(Link, {
  width: 'calc(50% -  0.5rem)',
  marginRight: '1rem',
  '&:nth-child(2n)': {
    marginRight: '0',
  },
});

const ImageWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'center',

  marginBottom: '1rem',
  width: '100%',
  height: '13.875rem',
  verticalAlign: 'top',
  overflow: 'hidden',
  borderRadius: '1.5rem',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  cursor: 'pointer',
});

export default function Gallery() {
  return (
    <RootContainer>
      <Outlet />
      <PageTitle>Gallery</PageTitle>
      <HostMessage>2023년 3월 25일</HostMessage>
      <GalleryWrap>
        {galleryImagesWithId.map(([backgroundImage, id]) => (
          <ImageLink key={id} to={`/gallery/${id}`}>
            <ImageWrap style={{ backgroundImage }} />
          </ImageLink>
        ))}
      </GalleryWrap>
    </RootContainer>
  );
}
