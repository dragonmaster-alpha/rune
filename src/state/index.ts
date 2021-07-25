import { configureStore } from '@reduxjs/toolkit'
import toastsReducer from './toasts'
import profileReducer from './profile'

export default configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    toasts: toastsReducer,
    profile: profileReducer,
  },
})
