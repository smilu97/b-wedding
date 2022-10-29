import { styled } from '../../stitches';

import PhoneIcon from '../../components/icons/PhoneIcon';
import MessageIcon from '../../components/icons/MessageIcon';
import CashIcon from '../../components/icons/CashIcon';
import { Link } from 'react-router-dom';

const ItemContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const NameWrap = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '0.75rem',
});

const PositionTxt = styled('p', {
  marginRight: '0.5rem',
  fontSize: '0.875rem',
  fontWeight: '400',
  color: '$primary400',
  letterSpacing: '0.1rem',
});

const NameTxt = styled('p', {
  fontSize: '0.875rem',
  fontWeight: '800',
  color: '$primary400',
  letterSpacing: '0.1rem',
});

const IconWrap = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const IconBox = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '2.5rem',
  height: '2.5rem',
  borderStyle: 'none',
  backgroundColor: '$contentBg',
});

const Image = styled('div', {
  width: '1.5rem',
  height: '1.5rem',
});

type ContactItemProps = {
  positionTxt: string;
  nameTxt: string;
  phoneNumber: string;
  accountKey: string;
};

export default function ContactItem({
  positionTxt,
  nameTxt,
  phoneNumber,
  accountKey,
}: ContactItemProps) {
  return (
    <ItemContainer>
      <NameWrap>
        <PositionTxt>{positionTxt}</PositionTxt>
        <NameTxt>{nameTxt}</NameTxt>
      </NameWrap>
      <IconWrap>
        <a href={`tel:${phoneNumber}`}>
          <IconBox>
            <Image>
              <PhoneIcon color="#483f32" />
            </Image>
          </IconBox>
        </a>
        <a href={`sms:${phoneNumber}`}>
          <IconBox>
            <Image>
              <MessageIcon color="#483f32" />
            </Image>
          </IconBox>
        </a>
        <Link to={`/transfer/${accountKey}`}>
          <IconBox>
            <Image>
              <CashIcon color="#483f32" />
            </Image>
          </IconBox>
        </Link>
      </IconWrap>
    </ItemContainer>
  );
}
