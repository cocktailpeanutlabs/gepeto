module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "npx --yes gepeto@latest --name={{encodeURIComponent(args.name)}} --git={{encodeURIComponent(args.git)}} --icon={{encodeURIComponent(args.icon)}}",
      path: "..",
    }
  }, {
    method: "notify",
    params: {
      html: "Generation complete. Click the home button to find the generated repository!"
    }
  }]
}
