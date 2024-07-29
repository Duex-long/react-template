import './index.less'
import { useState, useMemo, useEffect, useContext } from 'react'
import Runner from './running'
import { getSvgIcon } from '@/utils/icon'
import { PageChangeContext } from '@/utils/context/navigatorContext'

const SuccessContainer = () => {
  return (
    <div className="success-container">
      <div className="success-check">
        <img src={getSvgIcon('check')} />
      </div>
    </div>
  )
}

const LoginLoading = ({ loadingEmit }: { loadingEmit: () => void }) => {
  const [process, setProcess] = useState(0)
  const processCssVar = useMemo(() => {
    return {
      '--loading-process': `${process}%`,
      '--turn-process': `${process / 100}`,
    }
  }, [process])

  let i = 0
  let n = 0
  let timer: number | undefined
  const timeoutMock = () => {
    timer = window.setTimeout(() => {
      n++
      if (i < 100) {
        if (i <= 5) setProcess((i += 0.5))
        else if (i <= 15) setProcess(i++)
        else if (i <= 80) setProcess((i += 1.5))
        else if (i <= 95) setProcess(i++)
        else setProcess((i += 0.5))
      } else {
        n = 0
        i = 0
        return
      }
      timeoutMock()
    }, 1000 / 60)
  }

  useEffect(() => {
    timeoutMock()
    setTimeout(() => {
      loadingEmit()
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="page-loading">
      <div className="page-loading-container">
        <div
          className="page-circle"
          style={{ ...(processCssVar as React.CSSProperties) }}
        >
          <div className="center-container">
            {process == 100 ? <SuccessContainer /> : <Runner />}
          </div>
          <div className="circle-radius" />
        </div>
        <div className="loading-tips">
          {process == 100 ? 'success!' : 'confirm'}
        </div>
      </div>
    </div>
  )
}

export default LoginLoading
