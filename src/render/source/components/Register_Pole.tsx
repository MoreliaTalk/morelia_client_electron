import * as React from "react"
import { Component } from "react"

interface RegisterPoleProps {
    reg_send: any
}

interface RegisterPoleState {
    type: string
}

class Register_Pole extends Component {
    props: RegisterPoleProps;
    state: RegisterPoleState;
    title: string;
    input_and_button: () => JSX.Element;
    knopka: JSX.Element;

    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            type: "vxod"
        }
    }

    set_type(type: string){
        this.setState({
            type: type
        })
        console.log("change mode(reg and vxod window) to " + "type")
    }

    render(){
        var ChangeButton: JSX.Element;

        if (this.state.type == "vxod"){
            this.title = "Вход"
            this.knopka = <>
                <button id="knopkaRegVxod">
                    Войти
                </button>
            </>
            ChangeButton = <button id="changeModeButton" onClick={() => this.set_type("reg")}>
                Ещё не зарегистрированы?
            </button>

        } else if (this.state.type == "reg"){
            this.title = "Регистрация"
            this.knopka = <>
                <button id="knopkaRegVxod">
                    Зарегистрироваться
                </button>
            </>

            ChangeButton = <button id="changeModeButton" onClick={() => this.set_type("vxod")}>
                Уже зарегистрированы?
            </button>

        }

        this.input_and_button = () => {
            return(
                <div id="input_and_button">
                    <input id="login" placeholder="Логин"></input>
                    <input id="password" placeholder="Пароль"></input>
                    { this.knopka }
                </div>
            )
        }

        return (
            <div id="RegVxodRoot">
                { ChangeButton }
                <div id={this.state.type}>
                    <h1 id="RegVxodLabel">{this.title}</h1>
                    {this.input_and_button()}
                </div>
            </div>
        );
    }
}

export default Register_Pole;