import React from "react";


export default class Lifecycle extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            value:8
        };

    }

componentWillMount()
{
    console.log("Component Will Mount");
}

componentDidMount()
{
    console.log("Compoenent is mounted");
}
shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return this.state.name!==nextState.name
  }
componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
  }
componentDidUpdate(nextProps, nextState) {
    console.log("componentDidUpdate");
  }

ChangeState = () => {
    this.setState({value:3});

}
ChangeState2 = () => {
    this.setState({value:this.state.value+2});
}
CS = () => {
    console.log(this.state.value);
}
 
render()
{
    return<><div>Hi hello</div>
    <button onClick={this.ChangeState}>Change state</button>
    <button onClick={this.ChangeState2}>Change state 2</button>
    <button onClick={this.CS}>CS</button>

    
    </>;

}

}