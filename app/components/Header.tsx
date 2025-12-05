'use client'

import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { toggleTheme } from '../store/uiSlice'
import { Button } from '../ui/button'

export const Header = () => {
	const dispatch = useAppDispatch()
	const theme = useAppSelector(state => state.ui.theme)

	return (
		<div className='m-3 p-4 bg-gray-300 rounded-md dark:bg-gray-800'>
			<div className='flex justify-between '>
				<div className='h-10 items-center px-2 border border-black dark:border-white rounded-md flex space-x-3 '>
					<Link
						className='font-semibold hover:underline hover:opacity-85'
						href='/'
					>
						Home
					</Link>
					<Link
						className='font-semibold hover:underline hover:opacity-85'
						href='/animals'
					>
						Animals
					</Link>
				</div>
				<div className='flex flex-col items-center space-y-1.5'>
					<Button onClick={() => dispatch(toggleTheme())}>Toggle Theme</Button>
					<p className='mb-4 font-medium text-lg'>
						Theme:{' '}
						<span className='capitalize font-light text-sm'>{theme}</span>
					</p>
				</div>
			</div>
		</div>
	)
}
