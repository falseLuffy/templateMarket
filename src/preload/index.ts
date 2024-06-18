import { contextBridge, clipboard, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  clipboard,
  async getFileContent(name:string) {
    return await ipcRenderer.invoke('file' , {
      type: 'get',
      fileName: name
    })
  },
  writeFile(name:string, content:string){
    return ipcRenderer.invoke('file' , {
      type: 'write',
      fileName: name,
      content
    })
  },
  async getFileList(){
    return await ipcRenderer.invoke('file' , {
      type: 'list',
    })
  },
  getDirectory() {
    return ipcRenderer.invoke('dialog', {type: 'showOpenDialog'})
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
  // @ts-ignore (define in dts)
}
