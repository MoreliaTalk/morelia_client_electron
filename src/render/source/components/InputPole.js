import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";

class InputPole extends Component {
    constructor(props){
        super(props)
        this.state = {add_height: 19}
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
        return (
                <form id="forma_input">
                    <div id="text_input_container">
                        <TextField id="text_input" multiline={true} fullWidth={true} label="Введите текст сообщения:" 
                        color="primary"/>
                    </div>
                    <Button id="button_send">Отправить</Button>
                </form>
        );
    }
}

export default InputPole;