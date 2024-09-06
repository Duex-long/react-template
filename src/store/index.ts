import SignleRecordCreater, {
  SignleRecordInstance,
} from '@/pages/platform/core'
import {
  ComponentFactoryInterface,
  ComponentsInterface,
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

const platformState = () => {
  return {
    record: SignleRecordInstance,
    target: SignleRecordInstance.componentRoot,
  }
}

const platformSlice = createSlice({
  name: 'platform',
  initialState: platformState,
  reducers: {
    /** 测试用 */
    createFactory(state, { payload }: { payload: ComponentFactoryInterface }) {
      state.record.componentFactoryCollection.push(payload)
      state.record = {
        ...state.record,
      }
    },
    /** 更新选择节点*/
    updateSelectTarget(state, { payload }: { payload: ComponentsInterface }) {
      state.target = payload
    },
    /** 增加子节点*/
    appendContainer(state, { payload }: { payload: ComponentsInterface }) {
      state.target.appendChild(payload)
      state.target = {
        ...state.target,
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
