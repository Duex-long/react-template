import { FC, useEffect } from 'react'
import { getTypeComponent } from '../core'
import { FormItemInterface } from '../interface'
import { Form } from 'antd'

const getDefaultValue = (config:Array<FormItemInterface>) => {
    return config.map((item) => ({[item.name]:item.defaultValue}))
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
      <InsertComponent />
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
    console.log(valueList, '变化')
  }, [valueList])

  // const finish = (val: unknown) => {}
  // const numberValue = Form.useWatch('number', form)
  // useEffect(() => {
  //   console.log('update')
  // },[numberValue])

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
