module.exports = {
  requires: {
    bundle: "ai",
  },
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        path: "app",
      venv: "venv",
      env: { 
        PYTHONIOENCODING: "utf-8"
      },
      message: [
        "{{os.platform() === 'win32' ? 'gui.bat --noverify' : 'bash gui.sh --noverify'}}"
      ],
        on: [{
          "event": "/http:\/\/\\S+/", 
          "done": true
        }]
      }
    },
    {
      method: "local.set",
      params: {
        url: "{{input.event[0]}}"
      }
    }
  ]
}
