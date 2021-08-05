import { Validate } from "./api"

class Server_Com {
    ws: WebSocket;
    url: string;
    apiValidate: Validate;
    constructor(url: string){
        this.url = url
        this.ws = new WebSocket(url)
        this.ws.onopen = () => {
            console.log("Websocket is connect")
        }
        this.ws.onmessage = (event) => {
            console.log(event.data)
        }

        this.apiValidate = new Validate()

        this.send_auth = this.send_auth.bind(this)
        this.send_register_user = this.send_register_user.bind(this)
        this.send_json = this.send_json.bind(this)
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
    }
}

export default Server_Com;