import { Menu, MenuItem } from 'electron'

export default function () {
  const menu = new Menu()
  menu.append(
    new MenuItem({
      label: 'Electron',
      submenu: [
        {
          role: 'help',
          accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
          click: () => {
            console.log('Electron rocks!')
          }
        },
        {
          role: 'help',
          accelerator: process.platform === 'darwin' ? 'Alt+Cmd+O' : 'Alt+Shift+O',
          click: () => {
            console.log('Electron rocks2222!')
          }
        }
      ]
    })
  )

  Menu.setApplicationMenu(menu)
}
