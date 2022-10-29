import { styled } from '../../stitches';

import DeleteIcon from '../../components/icons/DeleteIcon';

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

export default function MessageItem({ guestName, message }: any) {
  return (
    <MessageContainer>
      <UserImage />
      <UserInfoWrap>
        <InfoHeader>
          <GuestName>{guestName}</GuestName>
          <DeleteButton>
            <DeleteIcon />
          </DeleteButton>
        </InfoHeader>
        <MessageText>{message}</MessageText>
        <DateText>2023년 3월 22일</DateText>
      </UserInfoWrap>
    </MessageContainer>
  );
}
