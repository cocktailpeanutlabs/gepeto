module.exports = {
  run: [{
    method: "shell.run",
    params: {
      id: "npx",
      message: "npx --yes gepeto@latest",
      path: "..",
      on: [{ "event": "/project name/i", done: true }]
    }
  }, {
    method: "shell.enter",
    params: {
      id: "npx",
      message: "{{args.name}}",
      on: [{ "event": "/icon url/i", "return": true }]
    }
  }, {
    method: "shell.enter",
    params: {
      id: "npx",
      message: "{{args.icon}}",
      on: [{ "event": "/3rd party git url/i", "return": true }]
    }
  }, {
    method: "shell.enter",
    params: {
      id: "npx",
      message: "{{args.git}}",
      on: [{ "event": null, "return": true }]
    }
  }]
}
