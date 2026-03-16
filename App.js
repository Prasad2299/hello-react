import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1",{id:"heading"},"React Element!")
console.log(heading);

const jsxHeading = <h1 id="heading">"Pr"</h1>

console.log(jsxHeading)
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)
