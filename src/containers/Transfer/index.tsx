import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import accounts from './accounts';

export type BankAccountDetail = {
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
    <div>
      <p>{account.nickname}</p>
      <p>{account.bankName}</p>
      <p>{account.accountNumber}</p>
      <p>{account.kakaoPayURL}</p>
    </div>
  );
}
