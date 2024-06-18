import { ipcMain } from 'electron'
import dispatcher from './router'

export default function installer() {
  ipcMain.handle('API', (event, args) => dispatcher(args))
}
