import { useEffect, useState } from "react";

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => {
      console.log("리턴 호출됨 - 언마운트된 것임.");      
      clearTimeout(timer);
    };
  }, [value, delay]);
  
  return debouncedValue;
}
