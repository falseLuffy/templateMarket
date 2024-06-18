import 'reflect-metadata'
import { RouteDefinition, PropertyDecorator, ParameterDecorator, URLFormat } from './type'
import UrlParse from 'url'

// 类装饰器
export function Controller(prefix: string) {
  return (target: any) => {
    Reflect.defineMetadata('prefix', prefix, target)
  }
}

// 属性装饰器
export const Inject = (): PropertyDecorator => {
  return (target?: any, propertyKey?: string | symbol, descriptor?: PropertyDescriptor) => {
    console.log(target, propertyKey, descriptor, 'Inject')
  }
}

// 方法装饰器
export const Get = (path: string) => {
  return (target: any, propertyKey: string) => {
    if (!Reflect.hasMetadata('routes', target.constructor)) {
      Reflect.defineMetadata('routes', [], target.constructor)
    }

    const routes = Reflect.getMetadata('routes', target.constructor) as Array<RouteDefinition>

    routes.push({
      requestMethod: 'get',
      path,
      methodName: propertyKey
    })
    Reflect.defineMetadata('routes', routes, target.constructor)
  }
}
export const Post = (path: string) => {
  return (target: any, propertyKey: string) => {
    if (!Reflect.hasMetadata('routes', target.constructor)) {
      Reflect.defineMetadata('routes', [], target.constructor)
    }

    const routes = Reflect.getMetadata('routes', target.constructor) as Array<RouteDefinition>

    routes.push({
      requestMethod: 'post',
      path,
      methodName: propertyKey
    })
    Reflect.defineMetadata('routes', routes, target.constructor)
  }
}

//参数装饰器
export const Body = (option?: any): ParameterDecorator => {
  return (target?: any, propertyKey?: string | symbol, parameterIndex?: number) => {
    console.log(target, propertyKey, parameterIndex, 'Body')
  }
}
export const Query = (option?: any): ParameterDecorator => {
  return (target?: any, propertyKey?: string | symbol, parameterIndex?: number) => {
    console.log(target, propertyKey, parameterIndex, option, 'Query')
  }
}
export const File = (): ParameterDecorator => {
  return (target?: any, propertyKey?: string | symbol, parameterIndex?: number) => {
    console.log(target, propertyKey, parameterIndex, 'File')
  }
}
export const Files = (): ParameterDecorator => {
  return (target?: any, propertyKey?: string | symbol, parameterIndex?: number) => {
    console.log(target, propertyKey, parameterIndex, 'Files')
  }
}
export const Fields = (): ParameterDecorator => {
  return (target?: any, propertyKey?: string | symbol, parameterIndex?: number) => {
    console.log(target, propertyKey, parameterIndex, 'Fields')
  }
}

// 常量
export const ALL = 'ALL'

export function createDecorator(controllers: any[]) {
  const routesBase: any = {}

  controllers.forEach((controller) => {
    // 获取 prefix
    const prefix = Reflect.getMetadata('prefix', controller)
    // 获取 routes
    const routes: Array<RouteDefinition> = Reflect.getMetadata('routes', controller)

    routes.forEach((route) => {
      if (!routesBase[route.requestMethod]) routesBase[route.requestMethod] = {}
      // 添加 Express 路由
      routesBase[route.requestMethod][prefix + route.path] = (req: any, res: any) => {
        const instance = new controller()
        return instance[route.methodName]?.(req, res)
      }
    })
  })

  function dispatcher(url: string, method: string = 'get', params: any = {}) {
    const urlFormat: any | URLFormat = UrlParse.parse(url)
    console.log(urlFormat.pathname)
    params.query = urlFormat.query
    return routesBase[method.toLowerCase()][urlFormat.pathname]?.(params)
  }

  return dispatcher
}
