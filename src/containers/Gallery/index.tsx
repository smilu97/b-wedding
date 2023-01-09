import { styled } from '../../stitches';
import PageTitle from '../../components/PageTitle';

import GalleryImg1 from '../../assets/gallery/gallery_1.jpg';
import { useState } from 'react';

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

const images = [GalleryImg1, GalleryImg1, GalleryImg1, GalleryImg1];
const imagesWithId: [string, number][] = images
  .map((s) => `url("${s}")`)
  .map((s, i) => [s, i]);

export default function Gallery() {
  console.log('image:', images[0]);
  const [toggler, setToggler] = useState(false);
  const [index, setIndex] = useState(0);

  const openImageBox = (id: number) => {
    setIndex(id);
    setToggler(!toggler);
  };

  return (
    <RootContainer>
      <PageTitle>Gallery</PageTitle>
      <HostMessage>2023년 3월 25일</HostMessage>
      <GalleryWrap>
        {imagesWithId.map(([backgroundImage, id]) => (
          <ImageWrap
            key={id}
            onClick={() => openImageBox(id)}
            style={{ backgroundImage }}
          />
        ))}
      </GalleryWrap>
      <MyLightbox toggler={toggler} sources={images} sourceIndex={index} />
    </RootContainer>
  );
}

function MyLightbox({
  toggler,
  sources,
  sourceIndex,
}: {
  toggler: boolean;
  sources: string[];
  sourceIndex: number;
}) {
  return <div>포기 포기</div>;
}
