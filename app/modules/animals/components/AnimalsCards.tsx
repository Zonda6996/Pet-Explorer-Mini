import { mockAnimals } from '../model/mockAnimals'
import AnimalCard from './AnimalCard'

const AnimalsCards = () => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
			{mockAnimals.map(animal => (
				<AnimalCard
					key={animal.id}
					alt={animal.alt}
					name={animal.name}
					description={animal.description}
					image={animal.image}
				/>
			))}
		</div>
	)
}

export default AnimalsCards
