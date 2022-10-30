import { styled } from '../../stitches';

import DeleteIcon from '../../components/icons/DeleteIcon';
import { Comment } from '../../guestbook';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';

const MessageContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: '1.5rem',
  width: '100%',
  minWidth: '17rem',
  maxWidth: '25rem',
});

const UserImage = styled('div', {
  marginRight: '1rem',
  width: '3rem',
  height: '3rem',
  borderRadius: '1rem',
  backgroundColor: '$primary150',
});

const UserInfoWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: 'calc(100% - 4rem)',
  borderBottom: '1px solid #E9E5E1',
});

const InfoHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0.125rem 0 0.5rem 0',
  width: '100%',
});

const GuestName = styled('p', {
  fontSize: '0.875rem',
  fontWeight: '600',
  fontFamily: 'Nanum Square',
  color: '$primary400',
  letterSpacing: '0.1rem',
});

const DeleteButton = styled('button', {
  width: '1rem',
  height: '1rem',
  borderStyle: 'none',
});

const MessageText = styled('p', {
  marginBottom: '0.5rem',
  fontSize: '0.812rem',
  fontWeight: '400',
  fontFamily: 'Nanum Square',
  color: '$primary400',
});

const DateText = styled('p', {
  marginBottom: '0.75rem',
  fontSize: '0.812rem',
  fontWeight: '400',
  fontFamily: 'Nanum Square',
  color: '#9B9485',
});

type MessageItemProps = {
  comment: Comment;
};

function formatTimestamp(timestamp: number, long = true) {
  const d = new Date(timestamp);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const date = d.getDate();
  const hours = d.getHours().toString().padStart(2, '0');
  const minutes = d.getMinutes().toString().padStart(2, '0');
  if (long) {
    return `${year}년 ${month}월 ${date}일 ${hours}:${minutes}`;
  } else {
    return `${year}년 ${month}월 ${date}일`;
  }
}

export default function MessageItem({ comment }: MessageItemProps) {
  const { nickname, message, timestamp } = comment;
  const dateString = formatTimestamp(timestamp, true);

  return (
    <MessageContainer>
      <UserImage />
      <UserInfoWrap>
        <InfoHeader>
          <GuestName>{nickname}</GuestName>
          <Link to={`/guestbook/delete/${comment.id}`}>
            <DeleteButton>
              <DeleteIcon />
            </DeleteButton>
          </Link>
        </InfoHeader>
        <MessageText>{message}</MessageText>
        <DateText>{dateString}</DateText>
      </UserInfoWrap>
    </MessageContainer>
  );
}
