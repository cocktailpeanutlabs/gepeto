module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "npx --yes gepeto@latest --name={{decodeURIComponent(args.name)}} --git={{decodeURIComponent(args.git)}} --icon={{decodeURIComponent(args.icon)}}",
      path: "..",
    }
  }]
}
