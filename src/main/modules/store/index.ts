import ElectronStore from 'electron-store'
import { ipcMain } from 'electron'

const store = new ElectronStore({
  encryptionKey: 'demo1'
})

export function dispatcher({ type, key, value }: any) {
  if (type === 'get') {
    return get(key)
  } else if (type === 'set') {
    return set(key, value)
  } else if (type === 'setDocPath') {
    setDocPath(value)
  } else if (type === 'getDocPath') {
    return getDocPath()
  }

  return ''
}

function get(key: string): any {
  return store.get(key)
}

function set(key: string, value: string) {
  return store.set(key, value)
}

export function getDocPath(): { path: string } {
  let obj = { path: '' }
  try {
    obj = JSON.parse(get('docPath'))
  } catch (e) {
    console.log('解析错误', e)
  }
  return obj
}

export function setDocPath(path: string) {
  return set('docPath', path)
}

export default function installer() {
  ipcMain.handle('store', (event, args) => dispatcher(args))
}
