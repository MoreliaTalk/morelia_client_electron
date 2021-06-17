import React, { Component } from "react";

class My_message extends Component{
    constructor(props){
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
    constructor(props){
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