import UserClass from "./UserClass";
import User from "./User";
import React from "react";

class About extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      // you can put state variable here.
    }
    console.log("Parent constructor called!")
  }
  componentDidMount(){
        // API IS CALLED INSDIE IT LIKE USEeffect hook in functional componnet

    console.log("Parent mouted on webpage! ")
  }
  render(){
    console.log("Parent render called! ")
      return (
        <div>
          <h1>Welcome to About Us</h1>
          <User name={"Prasad"} location={"Pune"}></User>
          <UserClass name={"Prasad class"} location={"Pune-class"}></UserClass>
          <UserClass name={"Prasad class"} location={"Pune-class"}></UserClass>
        </div>
      );
  }
}

// const About = () =>{
//   return <div >
//     <h1>Welcome to About Us</h1>
//     <User name={"Prasad"} location = {"Pune"}></User>
//     <UserClass name={"Prasad class"} location = {"Pune-class"}></UserClass>
//   </div>
// }

export default About;