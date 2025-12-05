import { Animal } from '../types/Animal'

export const mockAnimals: Animal[] = [
	{
		id: '1',
		name: 'Белла',
		description:
			'Дружелюбный золотистый ретривер, который любит играть в апорт.',
		image: '/animals/dog.webp',
		alt: 'Dog Image',
	},
	{
		id: '2',
		name: 'Max',
		description:
			'Любопытный полосатый кот, который любит исследовать новые места.',
		image: '/animals/cat.jpeg',
		alt: 'Cat Image',
	},
	{
		id: '3',
		name: 'Luna',
		description: 'Игривый кролик, который любит прыгать по саду.',
		image: '/animals/rabbit.jpg',
		alt: 'Rabbit Image',
	},
]
