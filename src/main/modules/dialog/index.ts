import { dialog, ipcMain } from "electron";

export function dispatcher ({ type }, context: any): any {
  if (type === 'showOpenDialog') {
    return dialog.showOpenDialog(context, {
      properties: ['openDirectory']
    })
  }
}


export default function installer(mainWindow){
  ipcMain.handle('dialog', (event, args) => dispatcher(args, mainWindow))
}
