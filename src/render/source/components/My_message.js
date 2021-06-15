import React, { Component } from "react";
import Svg from "../svg/my_mes.svg"

class My_message extends Component{
    render(){
        const add_border_image = {
            borderImageSource: "url("+Svg+")"
        }
        return (
            <div className="mes mes_user" style={add_border_image}>
                <p>Hello \/\/ORLDdggggggggggggggggg!</p>
            </div>
        )
    }
}

export default My_message