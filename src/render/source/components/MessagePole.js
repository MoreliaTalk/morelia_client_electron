import React, { Component } from "react";
import My_message from "./My_message.js"

class MessagePole extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div id="MessageGrid">
                <My_message text="ddfssssssssssss"/>
            </div>
        )
    }
}

export default MessagePole;