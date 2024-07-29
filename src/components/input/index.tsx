import { useMemo, useState } from 'react'
import './index.less'
import { getSvgIcon } from '@/utils/icon'

type InsertType = 'text' | 'password'
type InsertName = 'email' | 'password' | 'text'

const CuInput = ({
  type,
  placeholder = 'placeholder',
  name,
  value,
  setValue,
}: {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  type: InsertType
  name: InsertName
  placeholder?: string
}) => {
  // const [passwordVal, setPasswordVal] = useState('')
  const [focusState, setFocusState] = useState(false)

  //  是否是passwor
  // const isPasswordType = useMemo(
  //   () => type == 'password' || name == 'password',
  //   [type]
  // )
  //  模式值

  const containerClass = useMemo(() => {
    const state = focusState || !!value
    return state ? 'active' : ''
  }, [focusState, value])

  const focusClass = useMemo(() => {
    return focusState ? 'focus-instert' : ''
  }, [focusState])

  const insertChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 密码输入
    const isnertText = e.target.value
    // if (isPasswordType) {
    //   setPasswordVal(new Array(isnertText.length).fill('*').join(''))
    // } else {
    //   setValue(isnertText)
    // }
    setValue(isnertText)
  }
  return (
    <div className="page-input">
      <div
        data-text={placeholder}
        className={
          'page-inpt-container' + ' ' + containerClass + ' ' + focusClass
        }
      >
        <input
          type={type}
          onChange={insertChange}
          onFocus={() => setFocusState(true)}
          onBlur={() => setFocusState(false)}
        />
        <img className="input-icon" src={getSvgIcon(name)} />
      </div>
    </div>
  )
}

export default CuInput
