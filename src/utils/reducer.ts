type func<T = unknown> = () => T
type config = {
  /** 结束执行*/
  endHandler: func
  /** 结束条件*/
  endCondition: func<boolean>
  /** 递归执行 */
  reduceHandler: func
}

const createTimeoutReduce = (config: config) => {
  let _timer: null | number = null
  const { endCondition, reduceHandler, endHandler } = config

  const reduceCount = () => {
    reduceHandler()
    if (endCondition()) {
      endHandler()
    } else {
      _timer = window.setTimeout(reduceCount, 1000)
    }
  }

  const stopTimeout = () => {
    _timer && clearTimeout(_timer)
  }
  return {
    reduceCount,
    stopTimeout
  }
}


export default createTimeoutReduce