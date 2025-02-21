import React from "react";
type CState={
    count:number
}
type CProps={

}
class CTimer extends React.Component<CProps,CState>
{
    state={count:1};

//    constructor(props:CProps)//default
//    {
//     super(props);
//     setInterval(this.timerTick,1000);

//    }
componentDidMount(): void {
    setInterval(this.timerTick,1000);
    
}
   timerTick=()=>{
        this.setState({count:this.state.count+1});


   }
    render()
    {
        return(
            <>
                {this.state.count}
            </>
        )
    }

}
export default CTimer;
//regular -> create a this ->caller
//arrow no this 

// function test()
// {
//     funciton dummy()
//     {

//     }
//     dummy();

// }