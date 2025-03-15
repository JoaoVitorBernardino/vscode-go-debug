{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Launch Go Program with Viper and Tags",
            "type": "go",
            "request": "launch",
            "mode": "auto",
            "program": "${workspaceFolder}/src/app/api/main.go",
            "buildFlags": "-tags viper_bind_struct",
            "envFile": "${workspaceFolder}/.env",
            "cwd": "${workspaceFolder}"
        }
    ]
}
