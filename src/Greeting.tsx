import React from "react"
type GreetingProps={
    name:string
}
class Greeting extends React.Component<GreetingProps>
{
    clickHandler=()=>{
        alert("clicked");
    }
    render()
    {
        return (
            <>
            Class {this.props.name}
            <button  onClick={this.clickHandler}>Call me</button>
            </>
        )
    }

}
export default Greeting;