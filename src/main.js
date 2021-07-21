const { app, BrowserWindow } = require("electron")
const path = require("path")
const Store = require("electron-store")

function createWindow() {
    let win = new BrowserWindow({
        frame: false,
        show: false,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: false,
        }
    })

    win.loadFile("src/render/dist/index.html")
    win.once("ready-to-show", () => {
        win.show()
    })
}

app.whenReady().then(() => {
    createWindow()
})

app.on("window-all-closed", function (){
    app.quit()
})

require("@electron/remote/main").initialize()

class DB_Manage{
    constructor(){
        this.schema = {
            login_data: {
                type: "object",
                properties: {
                    login: {type: "string"},
                    password: {type: "string"}
                },
                required: ["login", "password"]
            },
            auth_data: {
                type: "object",
                properties: {
                    uuid: {type: "integer"},
                    auth_is: {type: "string"}
                }
            }
        }
    }
    connect(){
        this.store = new Store({
            scema: this.schema,
            accessPropertiesByDotNotation: false
        })
        console.log("DB is connect")
    }
    save_login_data(login, password){
        this.store.set({
            "login_data.login": login,
            "login_data.password": password
        })
        console.log("set login_data")
    }

    get_login_data(){
        return this.store.get("login_data"), this.store.get("login_data.password")
    }

    is_login_data(){
        return Boolean(this.store.get("login_data.login") && this.store.get("login_data.password"))
    }

    save_auth_data(uuid, auth_id){
        this.store.set({
            "auth_id.uuid": uuid,
            "auth_id.auth_id": auth_id
        })
        console.log("set auth_data")
    }

    get_auth_data(){
        return this.store.get("auth_data.uuid"), this.store.get("auth_data.auth_id")
    }

    is_auth_data(){
        return Boolean(this.store.get("auth_data.uuid"), this.store.get("auth_data.auth_id"))
    }
}

global.db = DB_Manage;