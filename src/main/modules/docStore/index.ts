import * as fs from 'fs'
import { app, ipcMain } from 'electron'
import { getDocPath } from '../store'

const settedDocPath = getDocPath()
let root = app.getPath('userData')

if (settedDocPath.path) {
  root = settedDocPath.path
}

const ENCODING = 'utf-8'
export function dispatcher({ type, fileName, content }: any) {
  if (type === 'write') {
    return write(fileName, content)
  } else if (type === 'get') {
    return reader(fileName)
  } else if (type === 'list') {
    return getAllFileList()
  } else if (type === 'updateRootPath') {
    updateRootPath(content)
  }
}

function write(path: string, content: string) {
  if (!fs.existsSync(`${root}/docs`)) {
    fs.mkdirSync(`${root}/docs`)
    return fs.writeFileSync(`${root}/docs/${path}`, content)
  } else {
    return fs.writeFileSync(`${root}/docs/${path}`, content)
  }
}

function reader(path: string) {
  const docPath = `${root}\\/docs\\/${path}`
  if (fs.existsSync(docPath)) {
    return fs.readFileSync(docPath, { encoding: ENCODING })
  } else {
    return ''
  }
}

function getAllFileList() {
  if (fs.existsSync(`${root}\\docs`)) {
    return fs.readdirSync(`${root}\\docs`)
  } else {
    return []
  }
}

function updateRootPath(path: string) {
  root = path
}

export default function installer() {
  ipcMain.handle('file', (event, args) => dispatcher(args))
}
