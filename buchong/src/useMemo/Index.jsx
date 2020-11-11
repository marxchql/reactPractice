import React, {useState,useMemo} from 'react';

const Index = () => {
  const [count, setCount] = useState(1);
  const [num, setNum] = useState(10);

  const computed = useMemo(() => {
    console.log('computed')
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
      sum += i
    }
    return sum
  }, [count])

  return (
    <div>
      <p>{count} - {num} - {computed}</p>
      <button onClick={() => setCount(count => count+1)}>btn</button>
      <button onClick={() => setNum(num => num+1)}>btn2</button>
    </div>
  );
}

export default Index;