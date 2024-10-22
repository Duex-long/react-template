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
  let _createFlag = false
  let _timer: null | number = null
  const { endCondition, reduceHandler, endHandler } = config

  const reduceCount = () => {
    if(_createFlag) return
    _createFlag = true
    const _reduceJob = () => {
      reduceHandler()

      if (endCondition()) {
        console.log('终止条件触发',endCondition())
        endHandler()
        _createFlag = false
      } else {
        _timer = window.setTimeout(_reduceJob, 1000)
      }
    }

    _reduceJob()
  }

  const stopTimeout = () => {
    _createFlag = false
    _timer && clearTimeout(_timer)
  }
  return {
    reduceCount,
    stopTimeout
  }
}

export default createTimeoutReduce

/**
 *
 *  解决需要回调调用且会重复调用的问题
 */

const scheduleMap = new Map<func, any>()
const createSchedule = (fn: func<Promise<unknown>>) => {
  let result
  if (scheduleMap.has(fn)) {
    result = scheduleMap.get(fn)
  } else {
    result = fn()
    result.then((res) => {
      clearSuccessJob()
      return res
    })
    scheduleMap.set(fn, result)
  }

  function clearSuccessJob() {
    scheduleMap.delete(fn)
  }

  return result
}

export { createSchedule }
