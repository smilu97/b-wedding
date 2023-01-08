import { BankAccountDetail } from '.';

const accounts: { [key: string]: BankAccountDetail } = {
  김영모: {
    role: '신랑 ',
    nickname: '김영모',
    bankName: '우리은행',
    accountNumber: '110-646-390201',
    kakaoPayURL: 'https://qr.kakaopay.com/FT28CafBl',
  },
  박현정: {
    role: '신부 ',
    nickname: '박현정',
    bankName: '우리은행',
    accountNumber: '110-646-390201',
    kakaoPayURL: 'https://qr.kakaopay.com/Ej9MKxNDQ',
  },
  김연석: {
    role: '신랑 아버지 ',
    nickname: '김연석',
    bankName: '우리은행',
    accountNumber: '110-646-390201',
  },
  최복하: {
    role: '신랑 어머니 ',
    nickname: '최복하',
    bankName: '우리은행',
    accountNumber: '110-646-390201',
  },
  박윤교: {
    role: '신부 아버지 ',
    nickname: '박윤교',
    bankName: '우리은행',
    accountNumber: '110-646-390201',
  },
  고명옥: {
    role: '신부 어머니 ',
    nickname: '고명옥',
    bankName: '우리은행',
    accountNumber: '110-646-390201',
  },
};

export default accounts;
