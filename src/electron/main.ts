import { app, BrowserWindow, ipcMain } from "electron";
import { isDev } from "./utils.js";
import { getPreloadPath, getUIPath } from "./pathResolver.js";
import { initialCheck } from "./modules/sqllite.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: getPreloadPath(),
    },
  });

  if (isDev()) {
    mainWindow.loadURL("http://localhost:5123/");
  } else {
    mainWindow.loadFile(getUIPath());
  }

  ipcMain.handle("status:initialCheck", initialCheck);
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
