import { styled } from '../../stitches';
import { useCallback, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
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

const ButtonBox = styled('a', {
  display: 'flex',
  textDecoration: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '3rem',
  borderRadius: '1rem',
  cursor: 'pointer',
  variants: {
    type: {
      1: { backgroundColor: '$primary400', marginBottom: '8px' },
      2: { backgroundColor: '#F5E11E', marginBottom: '0' },
      3: { backgroundColor: '$primary150', marginTop: '40px' },
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
  accountOwner: string;
  accountNumber: string;
  kakaoPayURL?: string;
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

  const sayItIsCopied = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      window.navigator.clipboard.writeText(account!.accountNumber).then(() => {
        alert('계좌 번호가 복사되었습니다');
      });
    },
    [account]
  );

  const exit = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  if (account === undefined) {
    return null;
  }

  return (
    <ContentContainer>
      <OwnerName>
        {account.role} {account.nickname}
      </OwnerName>
      <AccountWrap>
        <AccountTitle>계좌번호</AccountTitle>
        <Row>
          <RowText>
            {account.bankName} : {account.accountNumber}
          </RowText>
        </Row>
        <Row>
          <RowText>예금주 : {account.accountOwner}</RowText>
        </Row>
      </AccountWrap>
      <ButtonWrap>
        <ButtonBox onClick={sayItIsCopied} type={1}>
          <IconBox>
            <CopyIcon />
          </IconBox>
          <ButtonText type={1}>계좌 번호 복사</ButtonText>
        </ButtonBox>
        {account.kakaoPayURL ? (
          <ButtonBox href={account.kakaoPayURL} type={2}>
            <IconBox>
              <KakaoIcon />
            </IconBox>
            <ButtonText type={2}>카카오페이로 송금</ButtonText>
          </ButtonBox>
        ) : null}
        <ButtonBox onClick={exit} type={3}>
          <ButtonText type={2}>닫기</ButtonText>
        </ButtonBox>
      </ButtonWrap>
    </ContentContainer>
  );
}
