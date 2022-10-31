import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '../../stitches';

const RootContainer = styled('div', {
  position: 'fixed',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  zIndex: 5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const WidthLimit = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 20px',
  width: '100%',
});

const ContentContainer = styled('div', {
  padding: '20px',
  width: '100%',
  minWidth: '18rem',
  maxWidth: '24rem',
  minHeight: '6rem',
  backgroundColor: 'white',
  borderRadius: '1.5rem',
  boxSizing: 'border-box',
  boxShadow: '0px 4px 32px rgba(0, 0, 0, 0.48',
  zIndex: 6,
});

const ModalHeader = styled('div', {
  padding: '12px 0 30px 0',
  margin: 'auto',
  textAlign: 'center',
  borderBottom: 'dashed 1px $primary150',
});

const HeaderText = styled('h1', {
  fontSize: '1rem',
  fontWeight: '400',
  fontFamily: 'Nanum Square',
  color: '$primary400',
  letterSpacing: '0.1rem',
});

type ModalProps = {
  children: React.ReactNode;
  modalTitle: string;
};

export default function Modal({ children, modalTitle }: ModalProps) {
  const navigate = useNavigate();

  const exit = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <RootContainer onClick={exit}>
      <WidthLimit>
        <ContentContainer onClick={(e) => e.stopPropagation()}>
          <ModalHeader>
            <HeaderText>{modalTitle}</HeaderText>
          </ModalHeader>
          {children}
        </ContentContainer>
      </WidthLimit>
    </RootContainer>
  );
}
