'use client'

import Link from 'next/link'
import AnimalCard from './AnimalCard'
import { useQuery } from '@tanstack/react-query'
import { Animal } from '../types/Animal'
import { Button } from '@/ui/button'
import { CreateAnimalForm } from './CreateAnimalForm'

const AnimalsCards = () => {
	const { data, isLoading, isError, refetch } = useQuery({
		queryKey: ['animals'],
		queryFn: async (): Promise<Animal[]> => {
			const res = await fetch('/api/animals')
			if (!res.ok) throw new Error('Ошибка при загрузке животных')
			return res.json()
		},
	})

	if (isLoading) return <div>Загрузка...</div>
	if (isError)
		return (
			<div className='flex flex-col items-center'>
				<p>Ошибка при загрузке животных</p>
				<Button variant='link' onClick={() => refetch()}>
					Попробовать снова
				</Button>
			</div>
		)

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20'>
			{data?.map(animal => (
				<Link key={animal.id} href={`/animals/${animal.id}`}>
					<AnimalCard
						alt={animal.alt}
						name={animal.name}
						description={animal.description}
						image={animal.image}
					/>
				</Link>
			))}
			<CreateAnimalForm />
		</div>
	)
}

export default AnimalsCards
