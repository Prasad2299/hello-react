import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <>TITLE</>
}

const name =(<h1> 
  PRASAD
</h1>)

const Heading = () =>{
  return <>
      {Title()}
      <Title/>
      <h1>NAME : </h1>  {name}
      <h1>HEADING</h1>
    </>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading/>)