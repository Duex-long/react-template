import { FC, useEffect } from 'react'
import { getTypeComponent } from '../core'
import { FormItemInterface } from '../interface'
import { Form } from 'antd'

const getDefaultValue = (config: Array<FormItemInterface>) => {
  const result: { [x: string]: unknown } = {}
  config.forEach((item) => {
    result[item.name] = item.defaultValue
  })
  return result
}

const CreateFormItem: FC<FormItemInterface> = (config: FormItemInterface) => {
  const { name, label, rules } = config
  const InsertComponent = getTypeComponent(config.type)
  console.log(name, 'name')
  return (
    <Form.Item
      label={label}
      name={name}
      key={name}
      rules={rules}
      messageVariables={{ name }}
    >
      <InsertComponent {...config.expandConfig} />
    </Form.Item>
  )
}

const CreateForm: FC<{ schemaList: FormItemInterface[] }> = ({
  schemaList,
}) => {
  const [form] = Form.useForm()
  const watchAllVal = () => {
    return schemaList.map((item) => Form.useWatch(item.name, form))
  }
  const valueList = watchAllVal()
  useEffect(() => {
    console.log(valueList, '嵌入变化')
  }, [valueList])

  console.log(getDefaultValue(schemaList), '初始值')
  return (
    <Form
      initialValues={getDefaultValue(schemaList)}
      form={form}
      layout="vertical"
      autoComplete="off"
    >
      {schemaList.map(CreateFormItem)}
    </Form>
  )
}

export { CreateForm }
