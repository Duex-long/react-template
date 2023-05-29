import { fetchGet } from '@/utils/fetch'
import './Login.less'
import { Button, Form, Input, InputNumber, message } from 'antd'
import uuidv4 from 'uuid-random'
import JsEncrypt from 'JsEncrypt'
import md5 from 'js-md5'

type FormType = { login: { name: string; password: string } }

/** Layout 布局 */
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

/** Submit回调 */
const onFinish = (values: FormType) => {
  console.log(values)
}

/** 验证规则 */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}

/** Login */
const register = async (values: FormType) => {
  console.log('register')
  try {
    const publicKey = await getPublicKey()
    const password = rsaEncrypt(publicKey, values.login.password)
    // const response = await fetchGet('/auth/login', {
    //   username: values.login.name,
    //   password,
    // })
    // const { data } = await response.json()

    console.log(password, 'token')
  } catch (e) {
    console.log(e)
  }
}

/**获取公钥 */
const getPublicKey = async () => {
  const cacheKey = uuidv4()
  const response = await fetchGet('/auth/getPublicKey', { cacheKey })
  const { data } = await response.json()
  return data
}

/**加密 */
const rsaEncrypt = (publicKey: string, target: string) => {
  const myEncrypt = new JsEncrypt()
  const md5Target = md5(target)
  myEncrypt.setPublicKey(publicKey)
  const result = myEncrypt.encrypt(md5Target)
  return result || ''
}

export default function Login() {
  const [form] = Form.useForm<FormType>()
  return (
    <div className="Login">
      <div className="Login__form">
        <Form
          {...layout}
          name="nest-messages"
          onFinish={register}
          style={{ maxWidth: 600 }}
          validateMessages={validateMessages}
          form={form}
        >
          <Form.Item name={['login', 'name']} label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['login', 'password']} label="password" rules={[{ required: true }]}>
            <Input.Password placeholder="input password" />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
