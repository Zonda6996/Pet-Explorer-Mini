'use client'

import { ReactNode, useMemo } from 'react'
import { useAppSelector } from '@/hooks/hooks'

export function ThemeProvider({ children }: { children: ReactNode }) {
	const theme = useAppSelector(state => state.ui.theme)

	const themeClass = useMemo(() => (theme === 'dark' ? 'dark' : ''), [theme])

	return <div className={themeClass}>{children}</div>
}
