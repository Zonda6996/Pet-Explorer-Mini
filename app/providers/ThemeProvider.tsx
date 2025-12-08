'use client'

import { ReactNode, useEffect } from 'react'
import { useAppSelector } from '@/hooks/hooks'

export function ThemeProvider({ children }: { children: ReactNode }) {
	const theme = useAppSelector(state => state.ui.theme)

	useEffect(() => {
		const htmlElement = document.documentElement

		if (theme === 'dark') {
			htmlElement.classList.add('dark')
		} else {
			htmlElement.classList.remove('dark')
		}
	}, [theme])

	return <>{children}</>
}
