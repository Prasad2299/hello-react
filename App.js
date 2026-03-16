import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <>TITLE</>
}

const Heading = () =>{
  return <>
      <Title/>
      <h1>HEADING</h1>
    </>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading/>)