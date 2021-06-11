const { app, BrowserWindow } = require("electron")
const path = require("path")

function createWindow() {
    let win = new BrowserWindow({
        frame: false,
        show: false,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            preload: path.join(__dirname, 'preload.js'),
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