import React,{Component} from "react";

    class ClassCounter extends Component{
        // constructor(props){
        //     super(props);
        //         this.state = {
        //             number : 1008
        //         }
        //     }
        state = {
            number : 0
        }
        
    render(){
        const {number} = this.state
        return(
            <div>
                <h2>{number}</h2>
                <button onClick={()=>{
                    this.setState({number:number+1})
                }}>+1</button>
                <button onClick={()=>{
                    this.setState({number:number-1})
                }}>-1</button>
            </div>
        );
    }
};
export default ClassCounter;