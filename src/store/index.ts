import { SignleRecordInstance } from '@/pages/platform/core'
import {
  ComponentsInterface,
  StyleInterface,
} from '@/pages/platform/core/interface/components'
import { createSlice, combineReducers, configureStore } from '@reduxjs/toolkit'
import { Component } from 'react'

const indexSlice = createSlice({
  name: 'index',
  initialState: {
    count: 0,
  },
  reducers: {
    setCount(state, { payload }) {
      state.count = payload
    },
  },
})

const initialState = {
  record: SignleRecordInstance,
  target: SignleRecordInstance.componentRoot,
}

const platformState = () => {
  return initialState
}

const bfSearchComponent = (
  rootComponent: ComponentsInterface,
  check: (component: ComponentsInterface) => boolean
) => {
  const children = rootComponent.children
  const queue = [...children]
  while (queue.length) {
    const val = queue.shift()
    if (val) {
      const assertValue = check(val)
      if (assertValue) return val
      const children = val.children
      queue.push(...children)
    }
  }

  return undefined
}

const platformSlice = createSlice({
  name: 'platform',
  initialState: platformState,
  reducers: {
    /** 更新选择节点*/
    updateSelectTarget(state, { payload }: { payload: ComponentsInterface }) {
      state.target = payload
    },
    /** 增加子节点*/
    targetAppendChild(state, { payload }: { payload: ComponentsInterface }) {
      state.target.appendChild(payload)
      /** 添加子节点后 record中的内容也需要进行替换 */
      state.record = {
        ...state.record,
      }
    },
    /** 更新css */
    updateStyle(state, { payload }: { payload: StyleInterface }) {
      const keys = Object.keys(payload)
      const hasChange = keys.some(
        (item) =>
          payload[item] !==
          state.target.attribute.style[item as keyof StyleInterface]
      )
      if (!hasChange) return
      state.target.attribute.style = {
        ...state.target.attribute.style,
        ...payload,
      }
      console.log(state.target.id)
      if (state.target.id == 1) {
        const copyRootComponent = state.target.clone()
        state.target = copyRootComponent
        state.record = {
          ...state.record,
          componentRoot: copyRootComponent,
        }
        console.log('更新copy组件')
      } else {
        const parent = bfSearchComponent(
          state.record.componentRoot,
          (target) => {
            console.log(target, 'target')
            return target.id == state.target.id
          }
        )
        console.log(parent)
      }
    },
  },
})

export default configureStore({
  reducer: combineReducers({
    index: indexSlice.reducer,
    platform: platformSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
