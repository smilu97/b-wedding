import { styled } from '../../stitches';

import LeftIcon from '../../components/icons/LeftIcon';
import RightIcon from '../../components/icons/RightIcon';
import { useCallback } from 'react';

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
  cursor: 'pointer',
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

type PaginationProps = {
  page: number;
  maxPage: number;
  onNavigate: (dst: number) => any;
  batchSize: number;
};

function range(begin: number, end: number) {
  const r = [];
  for (let i = begin; i < end; i += 1) {
    r.push(i);
  }
  return r;
}

export default function Pagination({
  page,
  maxPage,
  onNavigate,
  batchSize,
}: PaginationProps) {
  const beginPage = Math.max(1, page - Math.floor((batchSize - 1) / 2));
  const endPage = Math.min(maxPage, beginPage + batchSize) + 1;
  const pages = range(beginPage, endPage);

  const left = useCallback(() => {
    onNavigate(page - 1);
  }, [onNavigate, page]);

  const right = useCallback(() => {
    onNavigate(page + 1);
  }, [onNavigate, page]);

  return (
    <PaginationContainer>
      <ButtonBox onClick={left} type={1}>
        <LeftIcon />
      </ButtonBox>
      <NumButtonWrap>
        {pages.map((p) => (
          <ButtonBox
            key={p}
            onClick={() => onNavigate(p)}
            type={p === page ? 1 : 2}
          >
            <NumText>{p}</NumText>
          </ButtonBox>
        ))}
      </NumButtonWrap>
      <ButtonBox onClick={right} type={1}>
        <RightIcon />
      </ButtonBox>
    </PaginationContainer>
  );
}
