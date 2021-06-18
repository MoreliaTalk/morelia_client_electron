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
        this.socket.send(JSON.stringify(data))
    }
    receive(event){
        console.log(event.data)
    }
}

export default Com_server