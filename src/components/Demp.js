import { useMemo, useState } from "react";

function Demp() {
  const [text, setText] = useState(0);
  const [isDark,setDark] = useState(false)

  console.log("rendering");

  //calculating n th prime no is heavy operation when there is state change it runs but when another state change which is not dependent on it it should not run.

  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  // use memo hook take function which is used to be memorized changes when text state changes.
  
  const prime = useMemo((text) => {
    let count = 0;
    let num = 2;
    console.log("calculating nth prime no")
    while (count < text) {
      if (isPrime(num)) {
        count++;
      }
      num++;
    }
    return num - 1;
  },[text])

  return (
    <div className={"m-4 p-4 w-96 h-96 border border-black "+(isDark && "bg-amber-800 text-white")}>
      Name:{" "}
      <input
        type="number"
        value={text}
        placeholder="enter name"
        className="border border-black"
        onChange={(e) => setText(e.target.value)}
      ></input>
      <div>
        <h1>nth Prime : {prime}</h1>
      </div>
      <div>
        <button className="border border-black rounded-2xl bg-amber-300 p-4 m-4" onClick={()=>setDark(!isDark)}>theme</button>
      </div>
    </div>
  );
}

export default Demp;
