import * as React from "react";
import { Component } from "react";

interface MessageProps{
    text: string
}

class My_message extends Component{
    text: string;
    props!: MessageProps;
    constructor(props: {} | Readonly<{}>){
        super(props)
        this.text = this.props.text 
    }
    render(){
        return (
            <div className="mes_user">
                <span className="text_mes_user" dangerouslySetInnerHTML={{__html: this.text}}></span>
            </div>
        )
    }
}


class Other_message extends Component{
    text: string;
    props!: MessageProps;
    constructor(props: {} | Readonly<{}>){
        super(props)
        this.text = this.props.text
    }
    render(){
        return (
            <div className="mes_other">
                <span className="text_mes_other" dangerouslySetInnerHTML={{__html: this.text}}></span>
            </div>
        )
    }
}


export {My_message, Other_message}