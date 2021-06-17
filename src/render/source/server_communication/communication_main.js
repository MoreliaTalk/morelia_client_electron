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
        var data = {
            "type": "send_message",
            "data": {
                "flow": [{
                    "id": 123
                    }],
                "message": [{
                    "text": text,
                }],
                "user": [{
                    "uuid": "882138532677",
                    "auth_id": "61529282b2174e6b071c090c24082e1c",
                    }],
                "meta": null
                },
            "jsonapi": {
                "version": "1.0"
                },
            "meta": null
        }
        
        this.socket.send(JSON.stringify(data))
    }
    receive(event){
        console.log(event.data)
    }
}

export default Com_server