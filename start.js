module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "npx --yes gepeto@latest --name {{args.name}} --git {{args.git}} --icon \"{{args.icon}}\"",
      path: "..",
    }
  }]
}
