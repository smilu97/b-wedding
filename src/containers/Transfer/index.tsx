import { styled } from '../../stitches';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import accounts from './accounts';

import CopyIcon from '../../components/icons/CopyIcon';
import KakaoIcon from '../../components/icons/KakaoBankIcon';

const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const OwnerName = styled('h2', {
  margin: '3.5rem 0',
  fontSize: '1.125rem',
  fontWeight: '800',
  color: '$primary400',
  letterSpacing: '0.1rem',
});

const AccountWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '3rem',
});

const AccountTitle = styled('h3', {
  marginBottom: '1.5rem',
  fontSize: '1rem',
  fontWeight: '400',
  fontFamily: 'Nanum Square',
  color: '$primary200',
});

const Row = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '4px',
});

const RowText = styled('p', {
  fontSize: '0.875rem',
  fontWeight: '400',
  fontFamily: 'Nanum Square',
  color: '$primary400',
  letterSpacing: '0.1rem',
});

const ButtonWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
});

const ButtonBox = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '3rem',
  borderRadius: '1rem',
  variants: {
    type: {
      1: { backgroundColor: '$primary400', marginBottom: '8px' },
      2: { backgroundColor: '#F5E11E', marginBottom: '40px' },
      3: { backgroundColor: '$primary150' },
    },
  },
});

const IconBox = styled('div', {
  marginRight: '1rem',
  width: '1.25rem',
  height: '1.25rem',
});

const ButtonText = styled('p', {
  fontSize: '0.875rem',
  fontWeight: '600',
  fontFamily: 'Nanum Square',
  variants: {
    type: {
      1: { color: '#ffffff' },
      2: { color: '$primary400' },
    },
  },
});

export type BankAccountDetail = {
  role: string;
  nickname: string;
  bankName: string;
  accountNumber: string;
  kakaoPayURL: string;
};

export default function Transfer() {
  const navigate = useNavigate();
  const { accountKey } = useParams();
  const account = accountKey ? accounts[accountKey] : undefined;

  useEffect(() => {
    if (account === undefined) {
      navigate('/');
    }
  }, [account, navigate]);

  if (account === undefined) {
    return null;
  }

  return (
    <ContentContainer>
      <OwnerName>
        {account.role}
        {account.nickname}
      </OwnerName>
      <AccountWrap>
        <AccountTitle>계좌번호</AccountTitle>
        <Row>
          <RowText>
            {account.bankName} : {account.accountNumber}
          </RowText>
        </Row>
        <Row>
          <RowText>예금주 : {account.nickname}</RowText>
        </Row>
      </AccountWrap>
      <ButtonWrap>
        <ButtonBox type={1}>
          <IconBox>
            <CopyIcon />
          </IconBox>
          <ButtonText type={1}>계좌 번호 복사</ButtonText>
        </ButtonBox>
        <ButtonBox type={2}>
          <IconBox>
            <KakaoIcon />
          </IconBox>
          <ButtonText type={2}>
            카카오페이로 송금<p>{account.kakaoPayURL}</p>
          </ButtonText>
        </ButtonBox>
        <ButtonBox type={3}>
          <ButtonText type={2}>닫기</ButtonText>
        </ButtonBox>
      </ButtonWrap>
    </ContentContainer>
  );
}
