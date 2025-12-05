'use client'

import AnimalForm from '@/modules/animals/components/AnimalForm'
import { mockAnimals } from '@/modules/animals/model/mockAnimals'
import { Button } from '@/ui/button'
import Image from 'next/image'
import { useParams } from 'next/navigation'

export default function AnimalPage() {
	const params = useParams()
	const animal = mockAnimals.find(a => a.id === params.id)
	console.log(params)

	if (!animal)
		return (
			<div className='text-center font-bold text-3xl'>
				Животное не найдено...
			</div>
		)

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
				<Button onClick={() => window.location.reload()} className='mt-6'>
					Обновить страницу
				</Button>
			</div>
			<AnimalForm />
		</div>
	)
}
