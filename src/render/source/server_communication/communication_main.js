class Com_server{
    constructor(){
        this.is_connect = false
    }
    connect(address){
        this.socket = new WebSocket(address)
        this.socket.onopen = function(e) {
            console.log("Соединение установлено");
            this.is_connect = true
        };
        this.socket.onclose = function(e) {
            if (this.is_connect){
                console.log("Соединение разорвано")
                this.is_connect = false
            }else{
                console.log("Ошибка подключения")
            }
        }
        this.socket.onmessage = (event) => this.receive(event)
    }
    send(text){
        
    }

    reg_user(login, password){
        console.log(login, password)
        this.socket.send(JSON.stringify(
            {
                "type": "register_user",
                "data": {
                    "user": [{
                        "password": password,
                        "login": login
                        }],
                    "meta": null
                    },
                "jsonapi": {
                    "version": "1.0"
                    },
                "meta": null
            }
        ))
    }

    receive(event){
        console.log(event.data)
    }
}

export default Com_server