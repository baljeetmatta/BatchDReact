import React from "react";
type StateProps={
    name:string;
}
type StateType={
    isLoggedIn:boolean;
    years:number
}
class State extends React.Component<StateProps,StateType>
{
    state={isLoggedIn:false,years:10};

    clickHandler=()=>{
        //alert("Clicked")
        this.setState({isLoggedIn:true});

    }
    clickHandler1=()=>{
        this.setState({years:this.state.years+1});
        this.setState({years:this.state.years+2});
        this.setState({years:this.state.years+3});
        // this.setState ((prev)=>{return {years:prev.years+1}})
        // this.setState ((prev)=>{return {years:prev.years+1}})
        // this.setState ((prev)=>{return {years:prev.years+1}})

    }
//props
    render(){
        return(
            <>
            {this.state.years};
            {this.state.isLoggedIn?'Logged in':'Logged out'}
            <div> Class Component {this.props.name}</div>
            <button onClick={this.clickHandler}>Click me</button>
            <button onClick={this.clickHandler1}>Years Update</button>
            </>
        )
    }

}
export default State;
