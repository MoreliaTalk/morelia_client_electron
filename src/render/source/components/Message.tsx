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