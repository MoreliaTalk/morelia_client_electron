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

import { Validate } from "./api"
import MainType from "./scemasType/main";
import * as Toastify from "toastify-js"

interface Server_ComDB{
    save_login_data: (login: string, password: string) => void
    save_auth_data: (uuid: string, auth_id: string) => void
}

interface Server_Com_Temporary_Storage{
    login?: string,
    password?: string
}

class Server_Com {
    ws: WebSocket;
    url: string;
    apiValidate: Validate;
    db: Server_ComDB
    temporary_storage: Server_Com_Temporary_Storage;
    reload_main: () => void;
    constructor(url: string, db: Server_ComDB, reload_main: () => void){
        this.url = url;
        this.db = db;
        this.reload_main = reload_main;

        this.temporary_storage = {

        }

        this.ws = new WebSocket(url)
        this.ws.onopen = () => {
            console.log("Websocket is connect")
        }

        this.ws.onmessage = (event) => {
            this.responseMessage(event)
        }

        this.ws.onclose = (event) => {
            if (!event.wasClean && event.code == 1006){
                // TODO: Заменить блокирующим меню с предложением сменить сервер
                Toastify({
                    backgroundColor: "#ff2400",
                    text: "Невозможно установить \n соединение с сервером",
                    gravity: "bottom",
                    position: "left",
                    duration: 1500
                }).showToast()
            }
        }

        this.apiValidate = new Validate()

        this.send_auth = this.send_auth.bind(this)
        this.send_register_user = this.send_register_user.bind(this)
        this.send_json = this.send_json.bind(this)
        this.responseMessage = this.responseMessage.bind(this)
        this.response_register_user = this.response_register_user.bind(this)
    }

    send_json(data: object){
        this.ws.send(JSON.stringify(data))
    }

    send_register_user(login: string, password: string){
        var objecta = this.apiValidate.new_object()
        objecta.type = "register_user"
        objecta.data = {}
        objecta.data.user = []
        objecta.data.user[0] = {
            login: login,
            password: password
        }
        this.send_json(objecta)
        this.temporary_storage.login = login
        this.temporary_storage.password = password
    }

    send_auth(login: string, password: string){
        var objecta = this.apiValidate.new_object()
        objecta.type = "auth"
        objecta.data = {}
        objecta.data.user = []
        objecta.data.user[0] = {
            login: login,
            password: password
        }
        this.send_json(objecta)
        this.temporary_storage.login = login
        this.temporary_storage.password = password
    }

    responseMessage(event: MessageEvent){
        var response: MainType = JSON.parse(event.data)
        var response_is_valid = this.apiValidate.validate(response)
        if (response_is_valid){
            console.log(response)

            if (response.type == "register_user"){
                this.response_register_user(response)
            } else if (response.type == "auth"){
                this.response_auth(response)
            }

        } else {
            console.error("validation error")
        }
    }
    
    response_register_user(response: MainType){
        if (this.temporary_storage.login && this.temporary_storage.password){
            if (response.errors?.code == 201){
                if (response.data?.user && response.data?.user[0].uuid && response.data?.user[0].auth_id){
                    this.db.save_login_data(
                        this.temporary_storage.login,
                        this.temporary_storage.password
                    )
                    this.db.save_auth_data(
                        response.data?.user[0].uuid,
                        response.data?.user[0].auth_id
                    )
                    console.log("Успешная регистрация")
                    this.reload_main()
                }

            } else if (response.errors?.code == 409){
                Toastify({
                    backgroundColor: "#ff2400",
                    text: "Такой пользователь уже существует",
                    gravity: "bottom",
                    position: "left",
                    duration: 1500
                }).showToast()
            }
        } else {
            Toastify({
                backgroundColor: "#ff2400",
                text: "Одно из полей пустое",
                gravity: "bottom",
                position: "left",
                duration: 1500
            }).showToast()
        }
    }

    response_auth(response: MainType){
        if (this.temporary_storage.login && this.temporary_storage.password){
            if (response.errors?.code == 200){
                if (response.data?.user && response.data?.user[0].uuid && response.data?.user[0].auth_id){
                    this.db.save_login_data(
                        this.temporary_storage.login,
                        this.temporary_storage.password
                    )
                    this.db.save_auth_data(
                        response.data.user[0].uuid,
                        response.data.user[0].auth_id
                    )
                    console.log("Успешный вход")
                    this.reload_main()
                }
            } else if (response.errors?.code == 401){
                Toastify({
                    backgroundColor: "#ff2400",
                    text: "Неверный пароль",
                    gravity: "bottom",
                    position: "left",
                    duration: 1500
                }).showToast()
            } else if (response.errors?.code == 404){
                Toastify({
                    backgroundColor: "rgb(150, 201, 61)",
                    text: "Пожалуйста, зарегистрирутесь!",
                    gravity: "bottom",
                    position: "left",
                    duration: 1500
                }).showToast()
            }
        } else {
            Toastify({
                backgroundColor: "#ff2400",
                text: "Одно из полей пустое",
                gravity: "bottom",
                position: "left",
                duration: 1500
            }).showToast()
        }

    }
}

export default Server_Com;