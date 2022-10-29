import { styled } from '../../stitches';

import PageTitle from '../../components/PageTitle';

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
  display: 'block',
  width: '100%',
  height: 'auto',
  overflowX: 'auto',
  overflowY: 'hidden',
  whiteSpace: 'nowrap',
  backgroundColor: 'red',
});

const ImageWrap = styled('div', {
  marginLeft: '1rem',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '15rem',
  height: '25rem',
  verticalAlign: 'top',
  overflow: 'hidden',
  borderRadius: '2rem',
  backgroundColor: 'green',
});

export default function GuestBook() {
  return (
    <RootContainer>
      <PageTitle>Gallery</PageTitle>
      <HostMessage>2023년 3월 25일</HostMessage>
      <GalleryWrap className="galleryWrap">
        <ImageWrap />
        <ImageWrap />
        <ImageWrap />
        <ImageWrap />
        <ImageWrap />
        <ImageWrap />
        <ImageWrap />
      </GalleryWrap>
    </RootContainer>
  );
}
