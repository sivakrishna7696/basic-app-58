import React, {Component} from "react";

class ClassComponent extends Component{
    constructor(){
        super()
        this.state = {
            message : 'party Started'
        }
    }

    updateMessage(){
            this.setState({
                message:'Parted Ended...!'
            })
    }

    render(){
        return(

            <div>
                <h2>Class Component</h2>
                <h3>The courseName is {this.props.courseName} and the duration is {this.props.durations}</h3>
                <h2>{this.state.message}</h2>
                <button onClick={()=>{this.updateMessage()}}>Click here</button>
            </div>
        ) 
    }
}

export default ClassComponent;