import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit'

const storeReducer = createSlice({
  name: 'index',
  initialState: {
    count: 1,
  },
  reducers: {
    updateCount(state, action) {
      state = {
        count: action.payload,
      }
    },
  },
})

export default  configureStore({
  reducer: combineReducers({
    index: storeReducer.reducer,
  }),
})
