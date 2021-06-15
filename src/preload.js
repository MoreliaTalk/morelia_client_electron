const { Titlebar, Color } = require("custom-electron-titlebar")

window.addEventListener("DOMContentLoaded", () => {
    var title_bar = new Titlebar({
        backgroundColor: Color.fromHex("#161616")
    })
    title_bar.updateMenuPosition("left")
})