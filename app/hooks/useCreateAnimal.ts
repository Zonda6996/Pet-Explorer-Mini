import { useMutation, useQueryClient } from '@tanstack/react-query'

interface NewAnimalData {
	name: string
	type: string
}

// Функция API (отправляет данные)
const createAnimal = async (data: NewAnimalData) => {
	const response = await fetch('http://localhost:3000/api/animals', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})

	if (!response.ok) {
		throw new Error('Ошибка при создании животного')
	}

	return response.json()
}

// Кастомный хук для создания животного
export const useCreateAnimal = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: createAnimal,

		// Инвалидация кэша: после успешного создания заставляем
		// запрос, который получает список, обновиться
		onSuccess: () => {
			// Ключ animals отвечает за список животных
			queryClient.invalidateQueries({ queryKey: ['animals'] })
		},
	})
}
