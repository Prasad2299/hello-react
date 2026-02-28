    // create element in react
    const heading = React.createElement("h1",{id:"heading"},"Hello world from React!")
    //create root in react
    const root =  ReactDOM.createRoot(document.getElementById("root"))
    //rendering heading in react
    root.render(heading)
