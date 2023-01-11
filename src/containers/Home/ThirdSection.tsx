import { styled } from '../../stitches';

import PageTitle from '../../components/PageTitle';
import ContactItem from './ContactItem';

const SectionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '5rem auto',
});

const ContentWrap = styled('div', {
  display: 'flex',
  alignItems: 'center',
  margin: '3.75rem 0 0 0',
});

const BlankSpace = styled('div', {
  variants: {
    type: {
      1: { width: '3rem' },
      2: { height: '3.5rem' },
    },
  },
});

const Column = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const SubTitleWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '7.5rem 0 3.5rem 0',
});

const SubTitleTxt = styled('p', {
  fontSize: '0.875rem',
  fontWeight: '800',
  color: '$primary800',
  letterSpacing: '0.1rem',
});

const UnderBar = styled('div', {
  marginTop: '0.75rem',
  width: '2.5rem',
  height: '1px',
  backgroundColor: '$primary800',
});

export default function HomeThirdSection() {
  return (
    <SectionContainer>
      <PageTitle>Contact us</PageTitle>
      <ContentWrap>
        <Column>
          <ContactItem
            positionTxt="신랑"
            nameTxt="김영모"
            phoneNumber="+82-10-6254-6927"
            accountKey="김영모"
          />
          <SubTitleWrap>
            <SubTitleTxt>신랑측 혼주</SubTitleTxt>
            <UnderBar />
          </SubTitleWrap>
          <ContactItem
            positionTxt="아버지"
            nameTxt="김연석"
            phoneNumber="+82-10-3786-5839"
            accountKey="김연석"
          />
          <BlankSpace type={2} />
          <ContactItem
            positionTxt="어머니"
            nameTxt="최복하"
            phoneNumber="+82-10-5581-6927"
            accountKey="김연석"
          />
        </Column>
        <BlankSpace type={1} />
        <Column>
          <ContactItem
            positionTxt="신부"
            nameTxt="박현정"
            phoneNumber="+82-10-8896-8534"
            accountKey="박현정"
          />
          <SubTitleWrap>
            <SubTitleTxt>신부측 혼주</SubTitleTxt>
            <UnderBar />
          </SubTitleWrap>
          <ContactItem
            positionTxt="아버지"
            nameTxt="박윤교"
            phoneNumber="+82-10-9035-8100"
            accountKey="박윤교"
          />
          <BlankSpace type={2} />
          <ContactItem
            positionTxt="어머니"
            nameTxt="고명옥"
            phoneNumber="+82-10-9984-8534"
            accountKey="고명옥"
          />
        </Column>
      </ContentWrap>
    </SectionContainer>
  );
}
