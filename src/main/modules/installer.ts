import APIInstaller from './API'
// import storeInstaller from './store'
// import FileInstaller from './docStore'
// import DialogInstaller from './dialog'
// import ShortcutKeyInstaller from './shortcutKey'
// import serialInstaller from './serialport'

// import BluetoothInstaller from './bluetooth/index'
export default function () {
  APIInstaller()
  // storeInstaller()
  // FileInstaller()
  // ShortcutKeyInstaller()
}

export function installByWindow(appWindow) {
  // DialogInstaller(appWindow)
  // BluetoothInstaller(appWindow)
}
