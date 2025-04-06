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
        "{{args.github ? 'npx --yes gepeto@latest add link --title=x --value=' + args.x : null}}",
        "{{args.github ? 'npx --yes gepeto@latest add link --title=github --value=' + args.github : null}}",
        "{{args.buymeacoffee ? 'npx --yes gepeto@latest add link --title=buymeacoffee --value=' + args.buymeacoffee : null}}",
        "{{args.kofi ? 'npx --yes gepeto@latest add link --title=kofi --value=' + args.kofi : null}}",
        "{{args.bsky ? 'npx --yes gepeto@latest add link --title=bluesky --value=' + args.bsky : null}}",
        "{{args.website ? 'npx --yes gepeto@latest add link --title=website --value=' + args.website : null}}",
        "{{args.bitcoin ? 'npx --yes gepeto@latest add link --title=bitcoin --type=bitcoin --value=' + args.bitcoin : null}}"
      ]
    }
  }, {
    method: "notify",
    params: {
      html: "Generation complete. Click the home button to find the generated repository!"
    }
  }]
}
