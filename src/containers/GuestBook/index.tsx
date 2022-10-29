import { styled } from '../../stitches';

import PageTitle from '../../components/PageTitle';
import MessageItem from './MessageItem';
import Pagination from './Pagination';

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
});

export default function GuestBook() {
  return (
    <RootContainer>
      <PageTitle>Guest Book</PageTitle>
      <HostMessage>신랑신부에게 축하의 메시지를 남겨주세요</HostMessage>
      <MessageWrap>
        <MessageItem
          guestName="피카츄"
          message="안녕하세요 제 이름은 피카츄 입니다. 받아랏 백만볼트. 찌리리리릿. 으아아아악!"
        />
        <MessageItem
          guestName="피카츄"
          message="안녕하세요 제 이름은 피카츄 입니다. 받아랏 백만볼트. 찌리리리릿. 으아아아악!"
        />
        <MessageItem
          guestName="피카츄"
          message="안녕하세요 제 이름은 피카츄 입니다. 받아랏 백만볼트. 찌리리리릿. 으아아아악!"
        />
        <MessageItem
          guestName="피카츄"
          message="안녕하세요 제 이름은 피카츄 입니다. 받아랏 백만볼트. 찌리리리릿. 으아아아악!"
        />
        <MessageItem
          guestName="피카츄"
          message="안녕하세요 제 이름은 피카츄 입니다. 받아랏 백만볼트. 찌리리리릿. 으아아아악!"
        />
        <MessageItem
          guestName="피카츄"
          message="안녕하세요 제 이름은 피카츄 입니다. 받아랏 백만볼트. 찌리리리릿. 으아아아악!"
        />
        <MessageItem
          guestName="피카츄"
          message="안녕하세요 제 이름은 피카츄 입니다. 받아랏 백만볼트. 찌리리리릿. 으아아아악!"
        />
        <MessageItem
          guestName="피카츄"
          message="안녕하세요 제 이름은 피카츄 입니다. 받아랏 백만볼트. 찌리리리릿. 으아아아악!"
        />
        <MessageItem
          guestName="피카츄"
          message="안녕하세요 제 이름은 피카츄 입니다. 받아랏 백만볼트. 찌리리리릿. 으아아아악!"
        />
        <MessageItem
          guestName="피카츄"
          message="안녕하세요 제 이름은 피카츄 입니다. 받아랏 백만볼트. 찌리리리릿. 으아아아악!"
        />
      </MessageWrap>
      <Pagination />
    </RootContainer>
  );
}
