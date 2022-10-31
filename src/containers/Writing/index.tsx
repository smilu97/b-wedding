import React, { useCallback } from 'react';
import { styled } from '../../stitches';
import { useNavigate } from 'react-router-dom';
import useGuestBook, { Comment } from '../../guestbook';
import { extractFromForm, useCancel } from '../../util';

import PageTitle from '../../components/PageTitle';

const RootContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '5rem auto',
});

const ContentWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '28rem',
  padding: '2.5rem 1.5rem 2.5rem 1.5rem',
  boxSizing: 'border-box',
});

const InputWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginBottom: '1rem',
});

const InputTitle = styled('h2', {
  marginBottom: '4px',
  fontSize: '0.875rem',
  fontWeight: '400',
  fontFamily: 'Nanum Square',
  letterSpacing: '0.1rem',
  color: '#998F7C',
});

const InputBox = styled('input', {
  padding: '1rem',
  width: '100%',
  height: '3rem',
  border: 'solid 1px $primary150',
  borderRadius: '1rem',
  outline: 'none',
  fontSize: '0.875rem',
  fontWeight: '400',
  fontFamily: 'Nanum Square',
  color: '$primary400',
  boxSizing: 'border-box',

  '&::placeholder': {
    fontSize: '0.875rem',
    fontWeight: '400',
    color: '$primary200',
  },
});

const TextArea = styled('textarea', {
  padding: '1rem',
  width: '100%',
  height: '9rem',
  border: 'solid 1px $primary150',
  borderRadius: '1rem',
  outline: 'none',
  boxSizing: 'border-box',
  resize: 'none',

  '&::placeholder': {
    fontSize: '0.875rem',
    fontWeight: '400',
    fontFamily: 'Nanum Square',
    color: '$primary200',
  },
});

const RadioContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'cneter',
  padding: '1rem 0',
  width: '100%',
});

const RadioWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'cneter',
  width: '50%',
});

const Radio = styled('input', {
  appearance: 'none',
  verticalAlign: 'middle',
  marginRight: '1rem',
  width: '1.55rem',
  height: '1.55rem',
  border: 'max(2px, 0.2rem) solid $primary400',
  borderRadius: '1rem',
  backgroundColor: '#ffffff',

  '&:checked': {
    backgroundColor: '$primary400',
  },
});

const Label = styled('label', {
  position: 'relative',
  top: '2px',
  fontSize: '0.875rem',
  fontWeight: '600',
  fontFamily: 'Nanum Square',
  color: '$primary400',
});

const ButtonWrap = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '6rem',
  width: '100%',
});

const Button = styled('input', {
  width: 'calc(50% - 6px)',
  height: '3.5rem',
  fontSize: '0.875rem',
  fontWeight: '600',
  fontFamily: 'Nanum Square',
  borderRadius: '1rem',
  border: 'none',
  variants: {
    bg: {
      1: { backgroundColor: '$primary400', color: '#ffffff' },
      2: { backgroundColor: '$primary150', color: '$primary400' },
    },
  },
});

export default function Writing() {
  const navigate = useNavigate();
  const cancel = useCancel('/guestbook');
  const add = useGuestBook()[1];

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const el = e.currentTarget;
      let comment: Comment | undefined = undefined;

      try {
        const data = new FormData(el);

        const nickname = extractFromForm(data, 'nickname');
        const message = extractFromForm(data, 'message');
        const password = extractFromForm(data, 'password');
        const willAttend = extractFromForm(data, 'willAttend');
        comment = {
          id: -1,
          timestamp: Date.now(),
          nickname,
          message,
          password,
          willAttend: willAttend === 'true',
        };
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        }
      } finally {
        console.log(comment);
        if (comment) {
          add(comment).then(() => navigate('/guestbook'));
        }
      }
    },
    [add, navigate]
  );

  return (
    <RootContainer>
      <PageTitle>Writing</PageTitle>
      <ContentWrap>
        <form onSubmit={handleSubmit}>
          <InputWrap>
            <InputTitle>이름</InputTitle>
            <InputBox name="nickname" placeholder="이름을 입력해주세요" />
          </InputWrap>
          <InputWrap>
            <InputTitle>메시지</InputTitle>
            <TextArea name="message" placeholder="메시지를 입력해주세요" />
          </InputWrap>
          <InputWrap>
            <InputTitle>참석여부</InputTitle>
            <RadioContainer>
              <RadioWrap>
                <Radio
                  type="radio"
                  id="attendTrue"
                  name="willAttend"
                  value="true"
                />
                <Label htmlFor="attendTrue">참석 가능</Label>
              </RadioWrap>
              <RadioWrap>
                <Radio
                  type="radio"
                  id="attendFalse"
                  name="willAttend"
                  value="false"
                  defaultChecked
                />
                <Label htmlFor="attendFalse">참석 불가</Label>
              </RadioWrap>
            </RadioContainer>
          </InputWrap>
          <InputWrap>
            <InputTitle>게시물 비밀번호</InputTitle>
            <InputBox
              type="password"
              name="password"
              placeholder="게시물 비밀번호를 입력해주세요"
            />
          </InputWrap>
          <ButtonWrap>
            <Button type="submit" value="취소" bg={2} onClick={cancel} />
            <Button type="submit" value="확인" bg={1} />
          </ButtonWrap>
        </form>
      </ContentWrap>
    </RootContainer>
  );
}
