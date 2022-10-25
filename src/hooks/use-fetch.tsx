import {useEffect, useState} from 'react';

export function useFetch<T>(url: string, options?: any) {
  const [data, setData] = useState<T>({} as T);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          const msg = getErrorMsg(response.status);
          setError(msg);
          console.error(`fetch error ${msg} - ${url}`)
          return;
        }
        return response.json();
      })
      .then(data => {
        setData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [options, url]);
  return [data, error, loading] as const;
}

function getErrorMsg(status:number) {
  switch(status) {
      case 500:
          return  '500_INTERNAL_ERROR';
      case 404:
          return  '404_PAGE_NOT_FOUND';
      case 401:
          return  '401_AUTH_FAILED';
      default:
          return `${status}_UNKNOWN_ISSUE`;
  }
}
