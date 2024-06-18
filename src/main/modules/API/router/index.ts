import { createDecorator } from '../utils/decorator'
import { HomeController } from '../controller/home'

const controllers = [
  HomeController,
]

const route = createDecorator(controllers)

function defaultApi() {
  return Promise.resolve({
    code: 0,
    data: [],
    LoginSuccess: true
  })
}

export default function dispatcher({ url, method, data }) {
  try {
    return route(url, method, data)
  } catch (e) {
    console.log(e)
    return defaultApi()
  }
}
