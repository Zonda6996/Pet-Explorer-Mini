import { NextResponse } from 'next/server'
import { mockAnimals } from '@/modules/animals/model/mockAnimals'
import { Animal } from '@/modules/animals/types/Animal'

let nextId = mockAnimals.length + 1 // Глобальный счетчик ID (только для моков)

export async function GET() {
	return NextResponse.json(mockAnimals)
}

export async function POST(request: Request) {
	const newAnimalData = await request.json() // Получаем данные нового животного из тела запроса

	// Создаем новое животное с уникальным ID
	const newAnimal: Animal = {
		id: (nextId++).toString(), // Генерируем новый ID
		...newAnimalData,
	}

	// Добавляем новое животное в мок-данные
	mockAnimals.push(newAnimal)

	// Отправляем ответ 201 Created
	return NextResponse.json(newAnimal, { status: 201 })
}
