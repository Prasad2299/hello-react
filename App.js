    // // create element in react
    // const heading = React.createElement("h1",{id:"heading"},"Hello world from React!")
    // console.log(heading)//object
    // //create root in react
    // const root =  ReactDOM.createRoot(document.getElementById("root"))
    // //rendering heading in react
    // root.render(heading)


    /*
      <div id="parent">
        <div id="child">
          <h1>HEADING</h1>
        </div>
      </div>
    */

// complex structure

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "THIS IS HEADING!"),
  ),
);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)