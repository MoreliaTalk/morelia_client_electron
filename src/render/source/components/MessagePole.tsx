/*
Copyright (c) 2021 - present NekrodNIK

This file is part of MoreliaClientElectron.

MoreliaClientElectron is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

MoreliaClientElectron is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with MoreliaClientElectron. If not, see <https://www.gnu.org/licenses/>.
*/

import * as React from "react";
import { Component } from "react";
import { My_message, Other_message } from "./Message"

interface MessagePoleProps{
    data: {
        type: string,
        text: string
    }[]
}

class MessagePole extends Component{
    props!: MessagePoleProps;
    massiv_mes: JSX.Element[]; 
    constructor(props: {} | Readonly<{}>){
        super(props)
        this.massiv_mes = []
    }

    render(){

        var arr = this.props.data

        this.massiv_mes = []
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].type == "my"){
                this.massiv_mes.push(<My_message key={i} text={arr[i].text}/>)
            }else if (arr[i].type == "other_user"){
                this.massiv_mes.push(<Other_message key={i} text={arr[i].text}/>)
            }
        }
        
        return (
            <div id="MessageGrid">
                {this.massiv_mes}
            </div>
        )
    }
}

export default MessagePole;