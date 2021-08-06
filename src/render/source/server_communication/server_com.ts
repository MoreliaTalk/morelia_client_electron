import { Validate } from "./api"
import MainType from "./scemasType/main";

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
        if (response.errors.code == 201){
            this.db.save_login_data(
                this.temporary_storage.login,
                this.temporary_storage.password
            )
            this.db.save_auth_data(
                response.data.user[0].uuid,
                response.data.user[0].auth_id
            )
            console.log("Успешная регистрация")
            this.reload_main()
        }
    }

    response_auth(response: MainType){
        if (response.errors.code == 200){
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
    }
}

export default Server_Com;