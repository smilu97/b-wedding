import { useEffect } from 'react';
import {
  Link,
  useLocation,
  useNavigate,
  useNavigation,
  useParams,
} from 'react-router-dom';
import CloseIcon from '../../components/icons/CloseIcon';
import { styled } from '../../stitches';
import { galleryImages } from './images';

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

function GalleryDetail() {
  const navigate = useNavigate();
  const { imageIndex } = useParams();
  const image = galleryImages[Number(imageIndex) - 1];
  console.log('image:', image);

  useEffect(() => {
    if (image === undefined) {
      navigate('/gallery');
    }
  }, [image]);

  if (!image) {
    return null;
  }

  return (
    <LightBoxWrap>
      <Link to="/gallery">
        <CloseButton>
          <CloseIcon color="#ffffff" />
        </CloseButton>
      </Link>
      <LightBoxIamge style={{ backgroundImage: `url(${image})` }} />
    </LightBoxWrap>
  );
}

export default GalleryDetail;
