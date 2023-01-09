import { styled } from '../../stitches';

import PageTitle from '../../components/PageTitle';

const SectionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '5rem auto',
});

const MessageWrap = styled('div', {
  margin: '7.5rem 0',
});

const InvitationMessage = styled('p', {
  fontSize: '0.8rem',
  fontWeight: '600',
  color: '$primary400',
  lineHeight: '2.2',
  letterSpacing: '0.2rem',
  textAlign: 'center',
});

const MessageDetail = styled('p', {
  margin: '1rem 0 2rem 0',
  fontSize: '0.6rem',
  color: '$primary300',
});

const NameWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Row = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

const BlankSpace = styled('div', {
  height: '1rem',
});

const NameTxt = styled('p', {
  fontSize: '0.8rem',
  fontWeight: '800',
  color: '$primary200',
  letterSpacing: '0.1rem',
});

const Dot = styled('div', {
  margin: '0 0.3rem',
  width: '0.125rem',
  height: '0.125rem',
  borderRadius: '0.0625rem',
  backgroundColor: '$primary200',
});

const ConnectTxt = styled('p', {
  margin: '0 0.8rem',
  width: '2.5rem',
  fontSize: '0.625rem',
  fontWeight: '600',
  color: '$primary200',
  letterSpacing: '0.05rem',
});

export default function HomeSecondSection() {
  return (
    <SectionContainer>
      <PageTitle>
        Wedding
        <br />
        Invitation
      </PageTitle>
      <MessageWrap>
        <InvitationMessage>
          예쁜 예감이 들었다.
          <br />
          우리는 언제나 손을 잡고 있게 될 것이다.
          <br />
          <MessageDetail>-이이체 '연인'-</MessageDetail>
          아주 작은 인연이 저희를 인연으로 만들었고
          <br />
          오늘, 그 인연으로 저희가 하나가 됩니다.
          <br />
          귀한 걸음으로 축복해 주시면
          <br />더 없는 기쁨으로 간직하겠습니다.
        </InvitationMessage>
      </MessageWrap>
      <NameWrap>
        <Row>
          <Row>
            <NameTxt>김연석</NameTxt>
            <Dot />
            <NameTxt>최복하</NameTxt>
          </Row>
          <ConnectTxt>의 아들</ConnectTxt>
          <NameTxt>영모</NameTxt>
        </Row>
        <BlankSpace />
        <Row>
          <Row>
            <NameTxt>박윤교</NameTxt>
            <Dot />
            <NameTxt>고명옥</NameTxt>
          </Row>
          <ConnectTxt>의 딸</ConnectTxt>
          <NameTxt>현정</NameTxt>
        </Row>
      </NameWrap>
    </SectionContainer>
  );
}
