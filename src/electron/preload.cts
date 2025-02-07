const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronStatus", {
  initialCheck: async () => ipcRenderer.invoke("status:initialCheck"),
} satisfies Window["electronStatus"]);
