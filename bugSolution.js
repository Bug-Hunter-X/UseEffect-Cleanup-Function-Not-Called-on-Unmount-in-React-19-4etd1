```javascript
import { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Use a flag to track mount status
    setIsMounted(true);
    return () => {
      setIsMounted(false);
      console.log('Cleanup function running');
    };
  }, []);

  useEffect(() => {
    if (isMounted) { 
      console.log('Effect running, count:', count);
    }
  }, [count, isMounted]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```