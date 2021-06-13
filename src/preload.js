const { Titlebar, Color } = require("custom-electron-titlebar")

window.addEventListener("DOMContentLoaded", () => {
    var title_bar = new Titlebar({
        backgroundColor: Color.fromHex("red")
    })
    title_bar.updateMenuPosition("left")
})