import { styled } from '../../stitches';

import PageTitle from '../../components/PageTitle';
import MessageItem from './MessageItem';
import Pagination from './Pagination';
import useGuestBook, { Comment } from '../../guestbook';
import { useCallback, useState } from 'react';

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

const MessageWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '2.5rem',
  width: '100%',
  padding: '0 1.5rem',
  boxSizing: 'border-box',
  minHeight: '22.5rem',
});

function usePaginate<T>(
  items: readonly T[],
  pageSize: number
): [typeof paged, typeof page, typeof maxPage, typeof goto] {
  const [page, setPage] = useState(1);
  const maxPage = Math.floor((items.length - 1) / pageSize) + 1;

  const goto = useCallback(
    (dst: number) => {
      if (dst >= 1 && dst <= maxPage) {
        setPage(dst);
      }
    },
    [setPage]
  );

  const rPage = Math.min(maxPage, Math.max(1, page));
  const pageBegin = (rPage - 1) * pageSize;
  const pageEnd = pageBegin + pageSize;
  const paged = items.slice(pageBegin, pageEnd);

  return [paged, rPage, maxPage, goto];
}

export default function GuestBook() {
  const [allComments, addComment, delComment] = useGuestBook();

  const [comments, page, maxPage, goto] = usePaginate(allComments, 3);

  return (
    <RootContainer>
      <PageTitle>Guest Book</PageTitle>
      <HostMessage>신랑신부에게 축하의 메시지를 남겨주세요</HostMessage>
      <MessageWrap>
        {comments.map((comment) => (
          <MessageItem
            key={comment.id}
            guestName={comment.nickname}
            message={comment.message}
          />
        ))}
      </MessageWrap>
      <Pagination
        page={page}
        maxPage={maxPage}
        onNavigate={goto}
        batchSize={7}
      />
    </RootContainer>
  );
}
