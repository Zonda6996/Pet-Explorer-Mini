import Image from 'next/image'

interface AnimalCardProps {
	name: string
	description: string
	image: string
	alt: string
}

const AnimalCard = ({ name, description, image, alt }: AnimalCardProps) => {
	return (
		<div className=' rounded-2xl shadow-lg overflow-hidden bg-white dark:bg-gray-800'>
			<div className='w-full h-64 relative'>
				<Image className='object-cover' src={image} alt={alt} fill />
			</div>
			<div className='h-full p-4 bg-gray-200 dark:bg-gray-700 dark:text-white'>
				<h2>
					<span className='font-bold'>Имя:</span> {name}
				</h2>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default AnimalCard
