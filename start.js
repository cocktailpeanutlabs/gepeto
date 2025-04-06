module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "npx --yes gepeto@latest --name={{encodeURIComponent(args.name)}} --git={{encodeURIComponent(args.git)}} --icon={{encodeURIComponent(args.icon)}}",
      path: "..",
    }, 
  }, {
    method: "shell.run",
    params: {
      path: "../{{encodeURIComponent(args.name)}}",
      message: [
        "npx --yes gepeto@latest add link --title=x --value={{args.x || ''}}",
        "npx --yes gepeto@latest add link --title=github --value={{args.github || ''}}",
        "npx --yes gepeto@latest add link --title=buymeacoffee --value={{args.buymeacoffee || ''}}",
        "npx --yes gepeto@latest add link --title=kofi --value={{args.kofi || ''}}",
        "npx --yes gepeto@latest add link --title=bluesky --value={{args.bsky || ''}}",
        "npx --yes gepeto@latest add link --title=website --value={{args.website || ''}}"
      ]
    }
  }, {
    method: "notify",
    params: {
      html: "Generation complete. Click the home button to find the generated repository!"
    }
  }]
}
