'use client'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { toggleTheme } from './store/uiSlice'
import { Button } from './ui/button'

export default function HomePage() {
	const dispatch = useAppDispatch()
	const theme = useAppSelector(state => state.ui.theme)

	return (
		<div className='p-4 font-sans min-h-screen dark:bg-gray-900 dark:text-white transition-colors duration-500'>
			<p className='mb-4 font-medium text-lg'>
				Theme: <span className='capitalize font-light'>{theme}</span>
			</p>
			<Button onClick={() => dispatch(toggleTheme())}>Toggle Theme</Button>
		</div>
	)
}
