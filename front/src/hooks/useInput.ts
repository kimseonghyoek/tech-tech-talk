import React, { useState, useCallback } from 'react';

export default (initValue: string | null) => {
  const [value, setValue] = useState(initValue);
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
};