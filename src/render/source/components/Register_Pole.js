import React, {Component} from "react";
import { Button, TextField } from "@material-ui/core";


class Register_Pole extends Component{
    constructor(props){
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
                        <Button variant="outlined" onClick={() => this.setState({reg: true})}>Ещё не зарегистрированны? Кликните сюда!</Button>
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
                                <TextField label="Логин" color="secondary"/>
                                <TextField label="Пароль" color="secondary"/>
                                <Button style={{backgroundColor: "#fde910", color: "#161616"}}>Войти</Button>
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
                        <Button variant="outlined" onClick={() => this.setState({reg: false})}>Уже зарегистрированны? Кликните сюда!</Button>
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
                                <TextField label="Логин" id="reg_login"/>
                                <TextField label="Пароль" id="reg_password"/>
                                <Button style={{backgroundColor: "#00ff00", color: "#161616"}} onClick={() => this.props.reg_send(document.getElementById("reg_login").value, document.getElementById("reg_password").value)}>Зарегистрироваться</Button>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    };
};

export default Register_Pole;