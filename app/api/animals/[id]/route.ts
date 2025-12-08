import { mockAnimals } from '@/modules/animals/model/mockAnimals'
import { NextResponse } from 'next/server'

export async function GET(
	request: Request,
	{ params }: { params: Promise<{ id: string }> }
) {
	const { id } = await params

	const animal = mockAnimals.find(a => a.id == id)

	if (!animal) {
		return NextResponse.json(
			{ message: 'Животное не найдено' },
			{ status: 404 }
		)
	}

	return NextResponse.json(animal)
}

