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
  fontSize: '0.875rem',
  fontWeight: '600',
  color: '$primary400',
  lineHeight: '1.75',
  letterSpacing: '0.2rem',
  textAlign: 'center',
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
  fontSize: '0.875rem',
  fontWeight: '800',
  color: '$primary200',
  letterSpacing: '0.1rem',
});

const Dot = styled('div', {
  margin: '0 0.5rem',
  width: '0.125rem',
  height: '0.125rem',
  borderRadius: '0.0625rem',
  backgroundColor: '$primary200',
});

const ConnectTxt = styled('p', {
  margin: '0 1rem',
  width: '2.5rem',
  fontSize: '0.625rem',
  fontWeight: '600',
  color: '$primary200',
  letterSpacing: '0.1rem',
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
          동해물과 백두산이
          <br />
          마르고 닳도록
          <br />
          하느님이 보우하사
          <br />
          우리나라 만세
          <br />
          <br />
          무궁화 삼천리 화려강산
          <br />
          대한사람 대한으로
          <br />
          길이 보전하세
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
