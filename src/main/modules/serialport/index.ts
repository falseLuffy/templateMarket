// @ts-nocheck

import { SerialPort /*, SerialPortMock*/ } from 'serialport'
import { ReadlineParser as Readline } from '@serialport/parser-readline'

// SerialPortMock.binding.createPort(path)
// const SerialPort = SerialPortMock
// console.log(serialModel, SerialPort, Readline)

let port
export default function () {
  const path = '/dev/example'

  port = new SerialPort({
    path,
    baudRate: 9600
  })
  const parser = port.pipe(new Readline({}))
  parser.on('data', (data) => {
    console.log(data)
  })

  // Open errors will be emitted as an error event
  parser.on('error', function (err) {
    console.log('Error: ', err.message)
  })

  port.on('open', () => {
    console.log('hello, has opened')
    port.port.emitData('data')
    port.write('ROBOT POWER ON')
  })
}

export function write(content: string) {
  port.write(content, function (err: typeof Error) {
    console.log(err)
  })
}

export function getList() {
  SerialPort.list()
    .then((list) => {
      console.log(list, 'list')
    })
    .catch((e) => {
      console.log(e, 'eeee')
    })
}
