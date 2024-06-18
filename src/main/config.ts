import { join } from 'path'
import icon from '../../resources/icon.png?asset'
import ico from '../../resources/icon.ico?asset'
import { windowWith, windowHeight } from './utils/constant'

export const windowConfig = {
  width: windowWith,
  height: windowHeight,
  show: false,
  autoHideMenuBar: true,
  ...(process.platform === 'linux' ? { icon } : { icon: ico }),
  webPreferences: {
    preload: join(__dirname, '../preload/index.js'),
    sandbox: false
  }
}
