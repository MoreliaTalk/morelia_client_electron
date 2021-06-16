import React, { Component } from "react";

class My_message extends Component{
    constructor(props){
        super(props)
        this.text = this.props.text.replace(/\\n/g, "<br />");  
    }
    render(){
        return (
            <div className="mes_user">
                <span className="text_mes_user" dangerouslySetInnerHTML={{__html: this.text}}></span>
            </div>
        )
    }
}

export default My_message