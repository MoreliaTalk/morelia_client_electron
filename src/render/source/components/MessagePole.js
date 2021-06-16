import React, { Component } from "react";
import My_message from "./My_message.js"

class MessagePole extends Component{
    constructor(props){
        super(props)
    }

    render(){

        var arr = this.props.data

        this.massiv_mes = []
        for (var i = 0; i < arr.length; i++) {
            this.massiv_mes.push(<My_message key={i} text={arr[i].text}/>)
        }
        
        return (
            <div id="MessageGrid">
                {this.massiv_mes}
            </div>
        )
    }
}

export default MessagePole;