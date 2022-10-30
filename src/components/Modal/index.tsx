import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '../../stitches';

const RootContainer = styled('div', {
  position: 'fixed',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const ContentContainer = styled('div', {
  padding: '20px',
  minWidth: '6rem',
  minHeight: '6rem',
  backgroundColor: 'white',
  borderRadius: '1.5rem',
  boxShadow: '0px 4px 32px rgba(0, 0, 0, 0.24)',
  zIndex: 6,
});

type ModalProps = {
  children: React.ReactNode;
};

export default function Modal({ children }: ModalProps) {
  const navigate = useNavigate();

  const exit = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <RootContainer onClick={exit}>
      <ContentContainer onClick={(e) => e.stopPropagation()}>
        {children}
      </ContentContainer>
    </RootContainer>
  );
}
