export interface RouteDefinition {
  path: string
  requestMethod: 'get' | 'post' | 'delete' | 'options' | 'put'
  methodName: string
}

// 属性装饰器
export type PropertyDecorator = (
  target?: NonNullable<unknown>,
  propertyKey?: string | symbol,
  descriptor?: PropertyDescriptor
) => void

export type ParameterDecorator = (
  target?: NonNullable<unknown>,
  propertyKey?: string | symbol,
  parameterIndex?: number
) => void

export interface URLFormat {
  protocol: string
  slashes: string
  auth: string
  host: string
  port: string
  hostname: string
  hash: string
  search: string
  query: string
  pathname: string
  path: string
  href: string
}
