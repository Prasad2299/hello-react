import React from "react"

class UserClass extends React.Component{

  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      count: 10,
      count2: 20
    }
  }
  render(){
    const{name,location} = this.props;
    const {count,count2} = this.state;
    return <div className="user-card">
      <h1>Name :{name}</h1>
      <h2>Location :{location}</h2>
      <h4>Count class : {count}</h4>
      <h4>Count2 class : {count2}</h4>
    </div>
  }
}

export default UserClass