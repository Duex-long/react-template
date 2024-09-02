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

export default configureStore({
  reducer: combineReducers({
    index: indexSlice.reducer,
  }),
})
