import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export function extractFromForm(data: FormData, key: string) {
  const entry = data.get(key);
  if (entry === null) {
    throw new Error(key);
  }
  const value = entry.toString();
  if (value.length === 0) {
    throw new Error(key);
  }
  return value;
}

export function useCancel(dst: string) {
  const navigate = useNavigate();

  return useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      e.preventDefault();
      navigate(dst);
    },
    [navigate]
  );
}
