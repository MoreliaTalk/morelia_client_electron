import Validate from "./api";

class Server_Com {
    ws: WebSocket;
    url: string;
    apiValidate: Validate;
    constructor(url: string){
        this.url = url
        this.apiValidate = new Validate()
        this.ws = new WebSocket(this.url)
        this.ws.onopen = () => {
            console.log("Websocket is connect")
        }
        this.ws.onmessage = (event) => {
            console.log(event.data)
        }
    }

    send_json(data: any){
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
}

export default Server_Com;