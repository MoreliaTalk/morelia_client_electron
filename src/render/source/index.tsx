import * as React from "react";
import { Component } from "react"
import * as ReactDOM from "react-dom";
import InputPole from "./components/InputPole";
import MessagePole from "./components/MessagePole";
import Register_Pole from "./components/Register_Pole";

const { getGlobal } = require("electron").remote

import Server_Com from "./server_communication/server_com";

import "./scss/style.scss"

interface stateMain{
    massiv_mes: {
        type: string,
        text: string
    }[],
    reg_or_login: boolean
}

class Main extends Component{
    db: any;
    state: stateMain;
    data_render: JSX.Element;
    server: Server_Com;
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

        this.server = new Server_Com("ws://localhost:8000/ws")
        var db = getGlobal("db")
        this.db = new db()
        this.db.connect()

        this.send_mes = this.send_mes.bind(this)
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

    render(){
        if (this.db.is_login_data()) {
            this.data_render = 
            <div id = "Main_root">
                <MessagePole data={this.state.massiv_mes}/>
                <InputPole send_method={this.send_mes}/>
            </div>
        } else {
            this.data_render = <>
                <Register_Pole reg_send={this.server.send_register_user}/>
            </>
        }
        return(
            <>
                {this.data_render}
            </>
        )
    }

}


ReactDOM.render(<Main />, document.getElementById("root"));