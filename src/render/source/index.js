import React, { Component } from "react";
import ReactDOM from "react-dom";
import InputPole from "./components/InputPole";
import MessagePole from "./components/MessagePole";
import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import Com_server from "./server_communication/communication_main";

const { getGlobal } = require("electron").remote


import './styles/App.css';

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

class Main extends Component{
    constructor(props){
        super(props)


        this.state = {
            massiv_mes: [
                {
                    type: "my",
                    text: "Hello World)))"
                }
            ]
        }

        this.server_com = new Com_server()
        this.server_com.connect("ws://localhost:8080/ws")
        var db = getGlobal("db")
        this.db = new db()
        this.db.connect()
        console.log(this.db.get_login_data())

        this.send_mes = this.send_mes.bind(this)

        if (this.db.is_login_data()) {
            this.data_render = <>
            <MessagePole data={this.state.massiv_mes}/>
            <InputPole send_method={this.send_mes}/>
            </>
        } else {
            this.data_render = <>
                <p>REGISTER</p>
            </>
        }
    }

    send_mes(type, text){
        this.setState(
            {
                massiv_mes: this.state.massiv_mes.concat({
                    type: type,
                    text: text
                })
            }
        )
        this.server_com.send(text)
    };

    render(){
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