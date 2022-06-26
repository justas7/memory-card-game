import { useState, useEffect, useRef } from 'react';
import { randomNumbers, setCards } from '../utils/utils';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const shouldFetch = useRef(true);
  useEffect(() => {
    if (shouldFetch.current) {
      shouldFetch.current = false;

      async function init() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const countries = await response.json();
            const numbers = randomNumbers(30, 242);
            setData([...setCards(countries, numbers)]);
          } else {
            throw response;
          }
        } catch (e) {
          setError(e);
        } finally {
          setLoading(false);
        }
      }
      init();
    }
  }, [url]);

  return { data, setData, error, loading };
};
export default useFetch;
