import React, { useState } from 'react';

export default function Button(props: any) {
  const [count, setCount] = useState(0);
  console.log({ props });
  return (
    <div>
      <div>
        <span>{count}</span>
        <br />
        <button onClick={() => setCount((prev) => prev + 1)}>Count</button>
        <button onClick={() => props.onClick()}>Other</button>
      </div>
    </div>
  );
}
