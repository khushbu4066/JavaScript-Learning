import { Component } from "react";

class C1 extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {role: "Engineer", name:""};
    }
    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render()
    {
        return(
            <div>
                <h1>Props value - {this.props.brand}</h1>
                <h1>State value - {this.state.role}</h1>
            </div>
        )
    }
}

export default C1;


