import { useIPCStore } from './IPCStore'
import { compact } from 'lodash'
const service = function (options: any) {
  const invoke = useIPCStore()
  const urlArr = compact(options.url.split('/'))
  urlArr.unshift('')
  const url = urlArr.join('/')
  options.url = url
  return invoke('API', options)
}

service.defaults = {
  baseURL: ''
}
export default service
