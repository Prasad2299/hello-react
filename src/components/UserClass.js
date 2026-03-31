import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 10,
      count2: 20,
      userInfo:{
        name:"dummy",
        location:"dummy"
      }
    };
    console.log("Child constructor is called!");
  }
 async componentDidMount() {
    // API IS CALLED INSDIE IT LIKE USEeffect hook in functional componnet
    const data = await fetch("https://api.github.com/users/Prasad2299");
    const json = await data.json()
    this.setState({
      userInfo:json
    })
    console.log("Child mouted on webpage! ",this.setState.userInfo);
  }
  render() {
    const { name, location } = this.props;
    const { count, count2 ,userInfo} = this.state;
    console.log("Child render is called!");
    return (
      <div className="user-card">
        <h1>Name :{userInfo.login}</h1>
        <h2>Location :{userInfo.location}</h2>
        <h4>Count class : {count}</h4>
        <button
          onClick={() => {
            this.setState({
              // count:count + 1,
              count: this.state.count + 1,
            });
          }}
        >
          Count inc
        </button>
        <h4>Count2 class : {count2}</h4>
      </div>
    );
  }
}

export default UserClass;
