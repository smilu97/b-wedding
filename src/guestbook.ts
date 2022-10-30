import { create } from 'apisauce';
import { proxy, useSnapshot } from 'valtio';

const api = create({
  baseURL: 'https://4eqwgsdki1.execute-api.ap-northeast-2.amazonaws.com/prod',
});

export type Comment = {
  id: number;
  timestamp: number;
  nickname: string;
  message: string;
  willAttend: boolean;
  password: string;
};

async function hashPassword(plain: string) {
  if (!window.crypto || !window.crypto.subtle) {
    console.warn('native hashing is not supported');
    return plain;
  }
  const data = new TextEncoder().encode(plain);
  const encData = await window.crypto.subtle.digest('sha-512', data);
  const hashArray = Array.from(new Uint8Array(encData));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
  return hashHex;
}

function validateCommentType(comment: Object) {
  return (
    comment.hasOwnProperty('id') &&
    comment.hasOwnProperty('nickname') &&
    comment.hasOwnProperty('message') &&
    comment.hasOwnProperty('willAttend') &&
    comment.hasOwnProperty('password') &&
    comment.hasOwnProperty('timestamp')
  );
}

const cacheHolder: { cache: Comment[] } = proxy({
  cache: [],
});

async function update() {
  cacheHolder.cache = await load();
  return cacheHolder.cache;
}

update().then(() => {});
setInterval(update, 3000);

async function load(): Promise<Comment[]> {
  const comments = (await (
    await api.get('/guestbook/comments')
  ).data) as Comment[];

  return comments
    .filter(validateCommentType)
    .sort((a, b) => b.timestamp - a.timestamp);
}

async function add(item: Comment) {
  await api.post('/guestbook/comments', {
    ...item,
    password: await hashPassword(item.password),
  });
  await update();
}

async function del(comment: Comment, password: string) {
  if ((await hashPassword(password)) === comment.password) {
    await api.delete(`/guestbook/comments/${comment.id}`);
  }
  await update();
}

export default function useGuestBook(): [
  typeof comments,
  typeof add,
  typeof del
] {
  const comments = useSnapshot(cacheHolder).cache;
  return [comments, add, del];
}
