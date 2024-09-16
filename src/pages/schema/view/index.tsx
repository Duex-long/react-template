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

const CreateForm: FC<{
  schemaList: FormItemInterface[]
  updateCallback?: (
    dataList: {
      name: string
      value: string | number
    }[]
  ) => void
}> = ({ schemaList, updateCallback }) => {
  const [form] = Form.useForm()

  const watchAllVal = () => {
    return schemaList.map((item) => ({
      name: item.name,
      // eslint-disable-next-line react-hooks/rules-of-hooks
      value: Form.useWatch(item.name, form),
    }))
  }
  const valueList = watchAllVal()
  useEffect(() => {
    if (
      valueList.every(
        ({ value }) => typeof value !== 'undefined' && value !== null
      )
    ) {
      updateCallback && updateCallback(valueList)
    }
  }, [updateCallback, valueList])

  return (
    <Form
      initialValues={getDefaultValue(schemaList)}
      form={form}
      layout="vertical"
      autoComplete="off"
      wrapperCol={{ span: 24 }}
    >
      {schemaList.map(CreateFormItem)}
    </Form>
  )
}

export { CreateForm }
