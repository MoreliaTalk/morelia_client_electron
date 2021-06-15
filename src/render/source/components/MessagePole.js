import React, { Component } from "react";
import My_message from "./My_message.js"

class MessagePole extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div id="MessageGrid">
                <div></div>
                <div></div>
                <div></div>
                <My_message/>
            </div>
        )
    }
}

export default MessagePole;