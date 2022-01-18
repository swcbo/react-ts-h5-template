import { useCallback, useState } from 'react';
const useAxios = <T extends object>(fun: () => Promise<T>, deps: any[]) => {
  const [reponse, setReponse] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const doAxios = useCallback(async () => {
    try {
      const data = (await fun()) as any;
      setReponse(data.data);
    } catch (error: any) {
      setError(error.toString());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps]);
  return {
    doAxios,
    error,
    reponse,
  };
};
export default useAxios;
