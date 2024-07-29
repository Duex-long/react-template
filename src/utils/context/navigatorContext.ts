import { createContext } from 'react'
import { FuncType } from '../type'

const PageChangeContext = createContext<{ pageChange?: FuncType }>({})

export { PageChangeContext }
