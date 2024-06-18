import moment from 'moment'

export function once(fn?: typeof Function): any {
  let ret: any // 缓存结果用
  return function (...args: any[]) {
    if (fn === undefined) return ret
    ret = fn(...args)
    fn = undefined // 表示已经执行过一次
    return ret
  }
}

export const aWeek = generateTimeRange(-7)

function generateTimeRange(day: number): string[] {
  return [moment().add(day, 'day').format('YYYY-MM-DD'), moment().format('YYYY-MM-DD')]
}
