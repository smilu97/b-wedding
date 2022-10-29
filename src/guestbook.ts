import { create } from 'apisauce';

const api = create({
  baseURL: 'https://4eqwgsdki1.execute-api.ap-northeast-2.amazonaws.com/prod',
});

export async function getAll() {
  return await (
    await api.get('/guestbook/comments')
  ).data;
}

export async function add(item: any) {
  return await await api.post('/guestbook/comments', item);
}

export async function del(id: number) {
  return await api.delete(`/guestbook/comments/${id}`);
}
