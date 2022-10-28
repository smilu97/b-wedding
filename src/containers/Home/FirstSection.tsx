import { styled } from '../../stitches';

import FlowerIcon from '../../components/icons/FlowerIcon';

const SectionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '5rem auto',
});

const DateDecoWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const TSEB = styled('p', {
  fontSize: '0.75rem',
  fontWeight: '800',
  color: '$primary700',
  letterSpacing: '0.2rem',
});

const Row = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '20px 0',
});

const DecoBar = styled('div', {
  margin: '0 0.875rem',
  width: '3.75rem',
  height: '1px',
  backgroundColor: '$primary700',
});

const MainContentsWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '5rem 0',
});

const NameText = styled('p', {
  fontSize: '1.125rem',
  fontWeight: '800',
  color: '$primary400',
  letterSpacing: '0.2rem',
});

const Flower = styled('div', {
  margin: '0 1rem',
  width: '1rem',
  height: '1rem',
});

const DDayTxt = styled('p', {
  margin: '3.75rem 0',
});

const Span = styled('span', {
  fontSize: '3rem',
  fontWeight: '800',
  color: '$primary400',
  letterSpacing: '0.6rem',
});

const MessageTxt = styled('p', {
  fontSize: '0.875rem',
  fontWeight: '800',
  color: '$primary400',
  textAlign: 'center',
  lineHeight: '1.75',
  letterSpacing: '0.2rem',
});

const InfoSecWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const InformationTxt = styled('p', {
  fontSize: '0.875rem',
  fontWeight: '600',
  color: '$primary300',
  textAlign: 'center',
  lineHeight: '1.75',
  letterSpacing: '0.1rem',
});

const UnderBar = styled('div', {
  marginTop: '2.5rem',
  width: '8.4rem',
  height: '1px',
  backgroundColor: '$primary150',
});

export default function HomeFirstSection() {
  return (
    <SectionContainer>
      <DateDecoWrap>
        <TSEB>2023</TSEB>
        <Row>
          <DecoBar />
          <TSEB>MARCH</TSEB>
          <DecoBar />
        </Row>
        <TSEB>25th</TSEB>
      </DateDecoWrap>
      <MainContentsWrap>
        <Row>
          <NameText>김영모</NameText>
          <Flower>
            <FlowerIcon color="#483f32" />
          </Flower>
          <NameText>박현정</NameText>
        </Row>
        <DDayTxt>
          <Span>D-</Span>
          <Span>160</Span>
        </DDayTxt>
        <MessageTxt>
          곧 하나가 될 두 사람의
          <br />
          결혼식에 초대합니다.
        </MessageTxt>
      </MainContentsWrap>
      <InfoSecWrap>
        <InformationTxt>
          2023년 3월 25일 토요일 오후 12시
          <br />
          헤리츠 웨딩 컨벤션 5층 프로메사 홀
        </InformationTxt>
        <UnderBar />
      </InfoSecWrap>
    </SectionContainer>
  );
}
