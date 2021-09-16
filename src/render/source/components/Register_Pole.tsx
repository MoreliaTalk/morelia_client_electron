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
    props!: RegisterPoleProps;
    state: RegisterPoleState;
    title: string;
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            type: "vxod",
            login: "",
            password: "",
        }
        this.title = ""
    }

    set_type(type: string){
        this.setState({
            type: type
        })
        console.log("change mode(reg and vxod window) to " + type)
    }

    render(){
        var ChangeButton: JSX.Element = <></>
        var input_and_button: () => JSX.Element;
        var knopka: JSX.Element;

        if (this.state.type == "vxod"){
            this.title = "Вход"
            knopka = <>
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
            knopka = <>
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

        input_and_button = () => {
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
                    { knopka }
                </div>
            )
        }

        return (
            <>
                { ChangeButton }
                <div id="RegVxodRoot">
                    <div id={this.state.type}>
                        <h1 id="RegVxodLabel">{this.title}</h1>
                        {input_and_button()}
                    </div>
                </div>
            </>
        );
    }
}

export default Register_Pole;