export const required = { required: true, message: '该项必填', trigger: ['blur'] }

export const ip = {
  pattern: /^((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}$/,
  message: '不符合ip规则',
  trigger: ['blur']
}

export const number = { pattern: /^\d+$/, message: '请输入数字', trigger: ['blur'] }

export const range = (min, max) => {
  return {
    type: 'number',
    min,
    max,
    message: `范围[${min}, ${max}]`,
    trigger: ['blur']
  }
}

export const port = range(1, 65635)

export const modbusAddress = range(1, 247)
