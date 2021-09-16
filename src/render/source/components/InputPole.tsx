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

interface InputPoleProps{
    send_method: any
}

interface InputPoleState{
    add_height: number
}

class InputPole extends Component {
    props!: InputPoleProps;
    state: InputPoleState;
    constructor(props: InputPoleProps | Readonly<{}>){
        super(props)
        this.state = {add_height: 19}
        this.send = this.send.bind(this);
    }

    send(){
        this.props.send_method("other_user", ((document.getElementById("text_input") as HTMLInputElement).value))
    }

    render() {
        return (
                <div id="forma_input">
                    <textarea id="text_input" placeholder = "Введите текст сообщения:"/>
                    <button id="button_send" onClick={this.send}>Отправить</button>
                </div>
        );
    }
}

export default InputPole;