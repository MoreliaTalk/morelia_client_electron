import * as React from "react"
import { Component } from "react"

interface RegisterPoleProps {
    send_register_user: any
    send_auth: any
}

interface RegisterPoleState {
    type: string
    login: string
    password: string
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
            type: "vxod",
            login: "",
            password: "",
        }
    }

    set_type(type: string){
        this.setState({
            type: type
        })
        console.log("change mode(reg and vxod window) to " + type)
    }

    render(){
        var ChangeButton: JSX.Element;

        if (this.state.type == "vxod"){
            this.title = "Вход"
            this.knopka = <>
                <button id="knopkaRegVxod" onClick={() => this.props.send_auth(
                    this.state.login,
                    this.state.password
                )}>
                    Войти
                </button>
            </>
            ChangeButton = <button id="changeModeButton" onClick={() => this.set_type("reg")}>
                Ещё не зарегистрированы?
            </button>

        } else if (this.state.type == "reg"){
            this.title = "Регистрация"
            this.knopka = <>
                <button id="knopkaRegVxod" onClick={() => this.props.send_register_user(
                    this.state.login,
                    this.state.password
                )}>
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
                    <input id="login" placeholder="Логин" value={this.state.login}
                    onChange={(event) => this.setState({
                        login: event.target.value
                    })}
                    ></input>
                    <input id="password" placeholder="Пароль" value={this.state.password}
                    onChange={(event) => this.setState({
                        password: event.target.value
                    })}
                    ></input>
                    { this.knopka }
                </div>
            )
        }

        return (
            <>
                { ChangeButton }
                <div id="RegVxodRoot">
                    <div id={this.state.type}>
                        <h1 id="RegVxodLabel">{this.title}</h1>
                        {this.input_and_button()}
                    </div>
                </div>
            </>
        );
    }
}

export default Register_Pole;