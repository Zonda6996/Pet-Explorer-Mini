'use client'

import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { ThemeProvider } from './ThemeProvider'
import { QueryProvider } from './QueryProvider'

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<Provider store={store}>
			<ThemeProvider>
				<QueryProvider>{children}</QueryProvider>
			</ThemeProvider>
		</Provider>
	)
}
