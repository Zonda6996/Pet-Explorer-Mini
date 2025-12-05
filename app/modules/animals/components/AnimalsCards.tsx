import Link from 'next/link'
import { mockAnimals } from '../model/mockAnimals'
import AnimalCard from './AnimalCard'

const AnimalsCards = () => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
			{mockAnimals.map(animal => (
				<Link key={animal.id} href={`/animals/${animal.id}`}>
					<AnimalCard
						alt={animal.alt}
						name={animal.name}
						description={animal.description}
						image={animal.image}
					/>
				</Link>
			))}
		</div>
	)
}

export default AnimalsCards
