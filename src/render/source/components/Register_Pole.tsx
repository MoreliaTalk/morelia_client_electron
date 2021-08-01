import * as React from "react";
import {Component} from "react";

interface RegPoleState{
    reg: boolean;
}

interface RegPoleProps{
    reg_send: any;
}

class Register_Pole extends Component{
    props: RegPoleProps;
    state: RegPoleState;
    constructor(props: {} | Readonly<{}>){
        super(props)
        this.state = { reg: false }
    }
    render(){
        if (!this.state.reg){
            return(
                <>
                    <div style={{
                        position: "fixed",
                        right: "10px",
                        bottom: "10px"
                    }}>
                        <button onClick={() => this.setState({reg: true})}>Ещё не зарегистрированны? Кликните сюда!</button>
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                    }}>
                        <div id="card_vxod">
                            <h1 id="vxod_label">Вход</h1>
                            <div id="vxod_data">
                                <input placeholder="Логин" id="log_login"/>
                                <input placeholder="Пароль" id="log_password"/>
                                <button style={{backgroundColor: "#fde910",
                                                color: "#161616",
                                                border: "#00ff00 3px solid",
                                                borderRadius: "10px",}}>Войти</button>
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            return(
                <>
                    <div style={{
                        position: "fixed",
                        right: "10px",
                        bottom: "10px"
                    }}>
                        <button onClick={() => this.setState({reg: false})}>Уже зарегистрированны? Кликните сюда!</button>
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                    }}>
                        <div id="card_reg">
                            <h1 id="reg_label">Регистрация</h1>
                            <div id="vxod_data">
                                <input placeholder="Логин" id="reg_login"/>
                                <input placeholder="Пароль" id="reg_password"/>
                                <button style={{backgroundColor: "#00ff00", color: "#161616"}} 
                                    onClick={() => this.props.reg_send(
                                    (document.getElementById("reg_login") as HTMLInputElement).value,
                                    (document.getElementById("reg_password") as HTMLInputElement).value
                                    )}>Зарегистрироваться</button>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    };
};

export default Register_Pole;