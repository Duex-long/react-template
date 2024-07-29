import { FuncType } from '../type'

const debounce = <T extends FuncType>(callback: T, delay = 1000): FuncType => {
  let timer: null | number = null
  return function (...args: IArguments[]) {
    if (timer) {
      return
    }
    timer = window.setTimeout(() => {
      timer && clearTimeout(timer)
      timer = null
    }, delay)
    callback(...args)
  }
}

export default debounce
