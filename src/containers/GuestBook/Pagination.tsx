import { styled } from '../../stitches';

import LeftIcon from '../../components/icons/LeftIcon';
import RightIcon from '../../components/icons/RightIcon';

const PaginationContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 1.5rem',
  width: '100%',
  boxSizing: 'border-box',
});

const ButtonBox = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '2rem',
  height: '2rem',
  borderRadius: '0.75rem',
  variants: {
    type: {
      1: { backgroundColor: '$primary400', '& > p': { color: '#ffffff' } },
      2: { backgroundColor: '$primary100', '& > p': { color: '$primary400' } },
    },
  },
});

const NumButtonWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 1rem',
});

const NumText = styled('p', {
  fontSize: '0.875rem',
  fontWeight: '600',
  fontFamily: 'Nanum Square',
});

export default function Pagination() {
  return (
    <PaginationContainer>
      <ButtonBox type={1}>
        <LeftIcon />
      </ButtonBox>
      <NumButtonWrap>
        <ButtonBox type={1}>
          <NumText>1</NumText>
        </ButtonBox>
        <ButtonBox type={2}>
          <NumText>2</NumText>
        </ButtonBox>
        <ButtonBox type={2}>
          <NumText>3</NumText>
        </ButtonBox>
        <ButtonBox type={2}>
          <NumText>4</NumText>
        </ButtonBox>
        <ButtonBox type={2}>
          <NumText>5</NumText>
        </ButtonBox>
      </NumButtonWrap>
      <ButtonBox type={1}>
        <RightIcon />
      </ButtonBox>
    </PaginationContainer>
  );
}
