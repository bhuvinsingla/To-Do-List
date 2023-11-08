import React,{useState} from "react";
function MyButton() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (<>
      <button onClick={handleClick} count={count}>
        Clicked {count} times
      </button>
      <button onClick={handleClick} count={count}>
      Clicked {count} times
    </button>
    </>
    );
  }
  export default MyButton ;