import { BankAccountDetail } from '.';

const accounts: { [key: string]: BankAccountDetail } = {
  김영모: {
    role: '신랑 ',
    nickname: '김영모',
    bankName: '우리은행',
    accountNumber: '1002-646-390201',
    kakaoPayURL: 'https://qr.kakaopay.com/FT28CafBl',
  },
  박현정: {
    role: '신부 ',
    nickname: '박현정',
    bankName: '기업은행',
    accountNumber: '070-092606-01-011',
    kakaoPayURL: 'https://qr.kakaopay.com/Ej9MKxNDQ',
  },
  김연석: {
    role: '신랑 아버지 ',
    nickname: '김연석',
    bankName: '우리은행',
    accountNumber: '706-229124-02-001',
  },
  최복하: {
    role: '신랑 어머니 ',
    nickname: '최복하',
    bankName: '우리은행',
    accountNumber: '706-229124-02-001',
  },
  박윤교: {
    role: '신부 아버지 ',
    nickname: '박윤교',
    bankName: '신한은행',
    accountNumber: '110-511-736155',
  },
  고명옥: {
    role: '신부 어머니 ',
    nickname: '고명옥',
    bankName: '신한은행',
    accountNumber: '110-511-736155',
  },
};

export default accounts;
