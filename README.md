# vscode-webvue
vscode webview extension template using vue 3 and vite ⚡

## 🚀 How to use it? 
The project is build with monorepo structure containing two packages. The first one is the client and the second one is the vscode extension code itself.

For running project in development mode use:

```bash
yarn run watch
```
and then start developing on the `/packages/client/` vue application directory. your changes will be watched using nodemon, then rebuilt and be opened inside vscode extension host ready to be used with vscode command pallate!

Inside the vue application code, the `vscode` object is globally injected and can be used to send messages to the vscode runtime and perform tasks such as read/writing files, etc.