import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useGuestBook, { Comment } from '../../guestbook';
import { extractFromForm, useCancel } from '../../util';

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
    <div>
      <form onSubmit={handleSubmit}>
        <input name="nickname" />
        <input name="message" />
        <div>
          <input type="radio" id="attendTrue" name="willAttend" value="true" />
          <label htmlFor="attendTrue">참석 가능</label>
        </div>
        <div>
          <input
            type="radio"
            id="attendFalse"
            name="willAttend"
            value="false"
            defaultChecked
          />
          <label htmlFor="attendFalse">참석 불가</label>
        </div>
        <input type="password" name="password" />
        <input type="submit" value="취소" onClick={cancel} />
        <input type="submit" value="확인" />
      </form>
    </div>
  );
}
