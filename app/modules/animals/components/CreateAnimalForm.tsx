'use client'

import { useCreateAnimal } from '@/hooks/useCreateAnimal'
import { Button } from '@/ui/button'
import React, { useState } from 'react'

export const CreateAnimalForm = () => {
	const [name, setName] = useState('')
	const [type, setType] = useState('')

	// Используем наш хук
	const { mutate, isPending, isError, isSuccess, error } = useCreateAnimal()

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (name && type) {
			mutate({ name, type }) // Запускаем мутацию
			setName('') // Очистка формы
			setType('')
		}
	}

	return (
		<div className='p-4 border rounded shadow'>
			<h3 className='text-lg font-semibold mb-3'>Добавить новое животное</h3>
			<form onSubmit={handleSubmit}>
				{/* ... поля ввода для name и type ... */}
				<input
					type='text'
					value={name}
					onChange={e => setName(e.target.value)}
					placeholder='Имя'
					className='border p-2 mr-2'
				/>
				<input
					type='text'
					value={type}
					onChange={e => setType(e.target.value)}
					placeholder='Тип'
					className='border p-2 mr-2'
				/>
				<Button className='mt-2' type='submit' disabled={isPending}>
					{isPending ? 'Создание...' : 'Создать животное'}
				</Button>
			</form>
			{isError && (
				<p className='text-red-500 mt-2'>Ошибка: {(error as Error).message}</p>
			)}
			{isSuccess && (
				<p className='text-green-500 mt-2'>Животное успешно создано!</p>
			)}
		</div>
	)
}
