import * as React from "react";
import { Component } from "react"
import * as ReactDOM from "react-dom";
import InputPole from "./components/InputPole";
import MessagePole from "./components/MessagePole";
import Register_Pole from "./components/Register_Pole";

const { getGlobal } = require("electron").remote

import Server_Com from "./server_communication/server_com";

import "toastify-js/src/toastify.css"
import "./scss/style.scss"

interface stateMain{
    massiv_mes: {
        type: string,
        text: string
    }[],
    reloaded: boolean
}

class Main extends Component{
    db: any;
    state: stateMain;
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
            reloaded: false
        }

        var db = getGlobal("db")
        this.db = new db()
        this.db.connect()

        this.send_mes = this.send_mes.bind(this)
        this.reload = this.reload.bind(this)

        this.server = new Server_Com("ws://localhost:8000/ws", this.db, this.reload)
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

    reload(){
        console.log(this)
        this.setState({
            reloaded: !this.state.reloaded
        })
    }

    render(){
        var data_render: JSX.Element;
        if (this.db.is_login_data()) {
            data_render = 
            <div id = "Main_root">
                <MessagePole data={this.state.massiv_mes}/>
                <InputPole send_method={this.send_mes}/>
            </div>
        } else {
            data_render = <>
                <Register_Pole send_auth={this.server.send_auth} send_register_user={this.server.send_register_user}/>
            </>
        }
        return(
            <>
                {data_render}
            </>
        )
    }

}


ReactDOM.render(<Main />, document.getElementById("root"));