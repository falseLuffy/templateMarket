import { Controller, Get, Post } from '../utils/decorator'

@Controller('/')
export class HomeController {
  hell = 100
  @Get('index')
  async home() {
    return 'Hello electron API: GET!'
  }
  @Post('index')
  async index() {
    return 'Hello electron API: POST!'
  }
}
