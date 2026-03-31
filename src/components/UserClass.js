import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 10,
      count2: 20,
    };
    console.log("Child constructor is called!");
  }
  componentDidMount() {
    // API IS CALLED INSDIE IT LIKE USEeffect hook in functional componnet
    console.log("Child mouted on webpage! ");
  }
  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    console.log("Child render is called!");
    return (
      <div className="user-card">
        <h1>Name :{name}</h1>
        <h2>Location :{location}</h2>
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
