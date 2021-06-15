import React from "react";
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
            main: "#161616"
        },
    }, 
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <MessagePole/>
        <InputPole/>
    </ThemeProvider>
, document.getElementById("root"));