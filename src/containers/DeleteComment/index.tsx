import { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useGuestBook from '../../guestbook';
import { extractFromForm, useCancel } from '../../util';

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
          del(comment, password).then(() => navigate('/guestbook'));
        }
      }
    },
    [del, comment, navigate]
  );

  return (
    <div>
      <form onSubmit={submit}>
        <input name="password" />
        <input type="submit" value="취소" onClick={cancel} />
        <input type="submit" value="삭제" />
      </form>
    </div>
  );
}
