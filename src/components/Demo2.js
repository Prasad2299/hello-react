import { useRef, useState } from "react";

function Demo2() {
  const [y, setY] = useState(0);
  const ref = useRef(0)
  let x = 0; // whenever component get render it refresh to let variable so it again start from 0 n it not updated on component.

  //we use useRef hook so after rendering component value will not get reset as it happened in let varaible value gets persisted between rendering.
  return (
    <div className="border border-black w-96 h-96">
      <button
        className="m-4 p-4 bg-amber-400"
        onClick={() => {
          x = x + 1;
          console.log("X=", x);
        }}
      >
        IncreaseX
      </button>
      <span>X = {x}</span>{" "}
      <button className="m-4 p-4 bg-amber-400" onClick={() => setY(y + 1)}>
        IncreaseY
      </button>
      <span>Y = {y}</span>
      <button className="m-4 p-4 bg-amber-400" onClick={()=>ref.current = ref.current + 1}>
        IncreaseRef
      </button>
      <span>Ref = {ref.current}</span>
    </div>
  );
}

export default Demo2;
