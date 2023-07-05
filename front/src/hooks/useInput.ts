import React, { useState, useCallback } from 'react';

const useInput = (initValue: string|any) => {
  const [value, setValue] = useState(initValue);
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};

export default useInput;