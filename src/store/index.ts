import { SignleRecordInstance } from '@/pages/platform/core'
import {
  ComponentsInterface,
  StyleInterface,
} from '@/pages/platform/core/interface/components'
import { createSlice, combineReducers, configureStore } from '@reduxjs/toolkit'

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
      state.target.attribute.css = {
        ...state.target.attribute.css,
        ...payload
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
