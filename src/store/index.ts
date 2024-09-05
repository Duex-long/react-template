import SignleRecordCreater, {
  SignleRecordInstance,
} from '@/pages/platform/core'
import { ComponentFactoryInterface } from '@/pages/platform/core/interface/components'
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

const platformState = {
  record: SignleRecordInstance,
}

const platformSlice = createSlice({
  name: 'platform',
  initialState: platformState,
  reducers: {
    createFactory(state, { payload }:{payload:ComponentFactoryInterface}) {
      state.record.componentFactoryCollection.push(payload)
    },
  },
})

export default configureStore({
  reducer: combineReducers({
    index: indexSlice.reducer,
    platform:platformSlice.reducer
  }),
})
