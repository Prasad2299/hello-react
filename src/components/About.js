import UserClass from "./UserClass";
import User from "./User";

const About = () =>{
  return <div >
    <h1>Welcome to About Us</h1>
    <User name={"Prasad"} location = {"Pune"}></User>
    <UserClass name={"Prasad class"} location = {"Pune-class"}></UserClass>
  </div>
}

export default About;