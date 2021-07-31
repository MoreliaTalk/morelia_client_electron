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

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            100
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        if (Number(document.getElementById("text_input").style.height.slice(0, -2)) != this.state.add_height){
            this.setState({
            add_height: Number(document.getElementById("text_input").style.height.slice(0, -2))
            });
            document.getElementById("root").style.gridTemplateRows = "1fr "+ String(57+this.state.add_height)+"px"
        }
    }

    render() {
        //TODO Заменить простые компоненты на более эстетичные
        return (
                <div id="forma_input">
                    <div id="text_input_container">
                        <textarea id="text_input" placeholder = "Введите текст сообщения:"/>
                    </div>
                    <button id="button_send" onClick={this.send}>Отправить</button>
                </div>
        );
    }
}

export default InputPole;