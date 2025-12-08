'use client'

import AnimalForm from '@/modules/animals/components/AnimalForm'
import { Animal } from '@/modules/animals/types/Animal'
import { Button } from '@/ui/button'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useParams } from 'next/navigation'

export default function AnimalPage() {
	const { id } = useParams()

	const {
		data: animal,
		isLoading,
		isError,
		refetch,
	} = useQuery({
		queryKey: ['animal', id],
		queryFn: async (): Promise<Animal> => {
			const res = await fetch(`http://localhost:3000/api/animals/${id}`)
			if (!res.ok) throw new Error('Животное не найдено')
			return res.json()
		},
	})

	if (isLoading) return <p>Загрузка...</p>
	if (isError || !animal) return <p>Животное не найдено</p>

	return (
		<div>
			<h1 className='text-3xl font-bold'>Страница животного</h1>
			<div className='mt-4'>
				<p>Эта страница для отдельного животного</p>
				<h2 className='text-xl font-semibold'>Животное номер {animal.id}</h2>
			</div>
			<div className='p-4 flex flex-col items-center'>
				<div className='my-4'></div>
				<Image
					src={animal.image}
					alt={animal.alt}
					width={300}
					height={300}
					loading='eager'
					className='w-96 rounded-xl'
				/>
				<h1 className='text-3xl font-bold'>{animal.name}</h1>
				<p className='mt-2'>{animal.description}</p>
				<Button onClick={() => refetch()} className='mt-6'>
					Перезагрузить данные животного
				</Button>
			</div>
			<AnimalForm />
		</div>
	)
}

