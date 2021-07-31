import * as React from "react";
import { Component } from "react";

interface InputPoleProps{
    send_method: any
}

interface InputPoleState{
    add_height: number
}

class InputPole extends Component {
    props: InputPoleProps;
    timerID: NodeJS.Timeout;
    state: InputPoleState;
    constructor(props: {} | Readonly<{}>){
        super(props)
        this.state = {add_height: 19}
        this.send = this.send.bind(this);
    }

    send(){
        this.props.send_method("other_user", ((document.getElementById("text_input") as HTMLInputElement).value))
    }

    render() {
        //TODO Заменить простые компоненты на более эстетичные
        return (
                <div id="forma_input">
                    <textarea id="text_input" placeholder = "Введите текст сообщения:"/>
                    <button id="button_send" onClick={this.send}>Отправить</button>
                </div>
        );
    }
}

export default InputPole;