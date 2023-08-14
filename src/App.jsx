import { useEffect, useState, useContext, useRef, useReducer, useMemo, useCallback } from 'react';
import './App.css'
import EstobiContext from './main';
import SomeChild from './SomeChild';

const reducer = (state, action) => {
  switch(action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

function App() {
  const [count, setCount] = useState(0);
  const estobiInfo = useContext(EstobiContext); 
  const ref = useRef();
  const [state, dispatch] = useReducer(reducer, 0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("HeLLO Hooks");
  }, [count])

  const handleRef = () => {
    console.log(ref.current.value)
  };

  // useMemo 値をブラウザのメモリ」に情報を保存する
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  const square = useMemo(() => {
    let i = 0;
    while (i < 2) {
      i++;
    }
    return count02 * count02;
  }, [count02]);

  // useCallback
  const [counter, setCounter] = useState(0);

  // const showCount = () => {
  //   alert(`これは重たい処理です`);
  // };
  
  const showCount = useCallback(() => {
    alert(`これは重たい処理です`);
  }, [counter]);

  return (
    <div className='App'>
      <h1>UseState, UseEffect</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <p>{estobiInfo.name}</p>
      <p>{estobiInfo.age}</p>

      <hr />
      <h1>useRef</h1>
      <input type="text" ref={ref} />
      <button onClick={handleRef}>UseRef</button>

      <hr />
      <h1>useReducer</h1>
      <p>Count : {state}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>

      <hr />
      <h1>useMemo</h1>
      <div>count01: {count01}</div>
      <div>count02: {count02}</div>
      <div>result: {square}</div>
      <button onClick={() => setCount01(count01 + 1)}>+</button>
      <button onClick={() => setCount02(count02 + 1)}>+</button>

      <hr />
      <h1>useCallback</h1>
      <SomeChild showCount={showCount} />
    </div>
  );
}
export default App;
