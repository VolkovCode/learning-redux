import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
  increment, 
  decrement, 
  reset, 
  incrementByAmount 
} from "./counterSlice";

const Counter = () => {
  const [amount, setAmount] = useState(0)  
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const addValue = Number(amount) || 0;
  const resetAll = () => {
    setAmount(0);
    dispatch(reset());
  }

  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
        <input value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <div>
          <button onClick={() => dispatch(incrementByAmount(addValue))}>Add amount</button>
          <button onClick={() => resetAll()}>reset</button>
        </div>
          
    </section>
  )
}

export default Counter