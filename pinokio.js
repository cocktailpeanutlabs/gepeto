const path = require('path')
module.exports = {
  version: "2.0",
  title: "gepeto",
  description: "Generate Pinokio Launchers, Instantly. https://gepeto.pinokio.computer",
  icon: "icon.jpeg",
  menu: async (kernel, info) => {
    let running = info.running("start.js")
    let updating = info.running("update.js")
    if (running) {
      // display html button
      // display start.js button
      return [{
        icon: "fa-solid fa-rocket",
        text: "Gepeto",
        href: "index.html?raw=true"
      }, {
        icon: 'fa-solid fa-terminal',
        text: "Terminal",
        href: "start.js",
      }]
    } else if (updating) {
      // display html button
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Updating",
        href: "update.js"
      }]
    } else {
      // display html button
      return [{
        default: true,
        icon: "fa-solid fa-rocket",
        text: "Gepeto",
        href: "index.html?raw=true"
      }, {
        icon: "fa-solid fa-plug",
        text: "Update",
        href: "update.js"
      }]
    }
  }
}
