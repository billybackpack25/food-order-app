import { useCallback, useState } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleError = (msg) => setError(msg || 'Something went wrong!');

  const call = async ({ url, config = {}, transform = (data) => data }) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        handleError();
        throw new Error('Request failed!');
      }

      const data = await response.json();
      const transformedData = transform(data);
      return transformedData;
    } catch (err) {
      handleError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    call: useCallback(call, []),
  };
};

export default useHttp;
