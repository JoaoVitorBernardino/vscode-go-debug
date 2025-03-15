{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Launch Go",
            "type": "go",
            "request": "launch",
            "mode": "auto",
            "program": "${workspaceFolder}/main.go", // Add the path to your main.go file
            "buildFlags": "", // Add your flags here if there are any
            "envFile": "${workspaceFolder}/.env",
            "cwd": "${workspaceFolder}"
        }
    ]
}
