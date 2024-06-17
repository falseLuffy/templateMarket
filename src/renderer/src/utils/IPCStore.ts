
export function useIPCStore() {
  return window.electron.ipcRenderer.invoke
}

export function useIpcRenderer() {
  return window.electron.ipcRenderer
}
