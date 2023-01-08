import { styled } from '../../stitches';
import { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useGuestBook from '../../guestbook';
import { extractFromForm, useCancel } from '../../util';

const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const ModalMessage = styled('h2', {
  padding: '3.5rem 0',
  fontsize: '0.875rem',
  fontWeight: '400',
  fontFamily: 'Nanum Square',
  color: '$primary400',
});

const ContentWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '28rem',
  padding: '2.5rem 0 0 0',
  boxSizing: 'border-box',
});

const InputWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginBottom: '2.5rem',
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

export default function DeleteComment() {
  const id = Number(useParams().id);
  const [comments, , del] = useGuestBook();
  const navigate = useNavigate();
  const cancel = useCancel('/guestbook');
  const comment = comments.find((el) => el.id === id);

  useEffect(() => {
    if (!comment) {
      navigate('/guestbook');
    }
  }, [comment, navigate]);

  const submit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const el = e.currentTarget;
      let password = '';

      try {
        const data = new FormData(el);
        password = extractFromForm(data, 'password');
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        }
      } finally {
        console.log(comment);
        if (comment) {
          del(comment, password).then((success: boolean) => {
            if (success) {
              navigate('/guestbook');
            } else {
              alert('잘못된 비밀번호입니다.');
            }
          });
        }
      }
    },
    [del, comment, navigate]
  );

  return (
    <ContentContainer>
      <ModalMessage>글을 삭제하시겠습니까?</ModalMessage>
      <ContentWrap>
        <form onSubmit={submit}>
          <InputWrap>
            <InputTitle>게시물 비밀번호</InputTitle>
            <InputBox name="password" />
          </InputWrap>
          <ButtonWrap>
            <Button type="submit" value="취소" bg={2} onClick={cancel} />
            <Button type="submit" value="삭제" bg={1} />
          </ButtonWrap>
        </form>
      </ContentWrap>
    </ContentContainer>
  );
}
