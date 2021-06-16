import React, { Component } from "react";
import ReactDOM from "react-dom";
import InputPole from "./components/InputPole";
import MessagePole from "./components/MessagePole";
import { createMuiTheme, ThemeProvider } from "@material-ui/core"


import './styles/App.css';

const theme = createMuiTheme({
    palette: { 
        type: 'dark',
        primary: {
            main: "#00ff00"
        },
        secondary: {
            main: "#373737"
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
                text: "Hello_World)))"
            }]
        }

        this.update_mes = (type, text) => {
            this.setState(
                {
                    massiv_mes: this.state.massiv_mes.concat({
                        type: type,
                        text: text
                    })
                }
            )
        }

    }
    render(){
        return(
            <>
                <MessagePole data={this.state.massiv_mes}/>
                <InputPole send_method={this.update_mes}/>
            </>
        )
    }

}


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Main />
    </ThemeProvider>
, document.getElementById("root"));