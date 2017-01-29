const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const spawn = require('child_process').spawn
const ffmpeg = require('fluent-ffmpeg')
const fs = require('fs')
const userData = app.getPath('userData')
const path = require('path');
const url = require('url');
const extract = require('extract-zip');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true,
  });
  mainWindow.loadURL(startUrl);
  // mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.stop()
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

app.initPlayer = (file) => {
  return spawn(`${userData}/ffmpeg/ffplay`, [file.path, '-nodisp', '-autoexit'], {stdio: 'ignore'});
}

if (!fs.existsSync(`${userData}/joe.txt`)) {
  extract(__dirname + '/../ffmpeg.zip', {dir: userData}, function (err) {
   fs.writeFile(`${userData}/joe.txt`, 'Joe')
  })
}