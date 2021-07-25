import * as React from "react";
import { Component } from "react"
import * as ReactDOM from "react-dom";
import InputPole from "./components/InputPole";
import MessagePole from "./components/MessagePole";
import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import Com_server from "./server_communication/communication_main";
import Register_pole from "./components/Register_Pole"

const { getGlobal } = require("electron").remote


import './styles/App.css';
import Register_Pole from "./components/Register_Pole";


const theme = createMuiTheme({
    palette: { 
        type: 'dark',
        primary: {
            main: "#00ff00"
        },
        secondary: {
            main: "#fde910"
        },
    }, 
});

interface stateMain{
    massiv_mes: {
        type: string,
        text: string
    }[],
    reg_or_login: boolean
}

class Main extends Component{
    server_com: Com_server;
    db: any;
    state: stateMain;
    data_render: JSX.Element;
    constructor(props: {} | Readonly<{}>){
        super(props)


        this.state = {
            massiv_mes: [
                {
                    type: "my",
                    text: "Hello World)))"
                }
            ],
            reg_or_login: false
        }

        this.server_com = new Com_server()
        this.server_com.connect("ws://localhost:8000/ws")
        var db = getGlobal("db")
        this.db = new db()
        this.db.connect()

        this.send_mes = this.send_mes.bind(this)
        this.reg_send = this.reg_send.bind(this)
    }

    send_mes(type: string, text: string){
        this.setState(
            {
                massiv_mes: this.state.massiv_mes.concat({
                    type: type,
                    text: text
                })
            }
        )
    };

    reg_send(login: string, password: string){
        console.log("ss")
        this.server_com.reg_user(login, password)
        this.db.save_login_data(login, password)
        this.setState({
            reg_or_login: !this.state.reg_or_login,
        })
    }

    render(){
        if (this.db.is_login_data()) {
            this.data_render = 
            <div id = "root_for_main">
                <MessagePole data={this.state.massiv_mes}/>
                <InputPole send_method={this.send_mes}/>
            </div>
        } else {
            this.data_render = <>
                <Register_Pole reg_send={this.reg_send}/>
            </>
        }
        return(
            <>
                {this.data_render}
            </>
        )
    }

}


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Main />
    </ThemeProvider>
, document.getElementById("root"));