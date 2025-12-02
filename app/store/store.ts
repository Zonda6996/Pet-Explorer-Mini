import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './uiSlice'

export const store = configureStore({
	reducer: {
		ui: uiReducer,
	},
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
