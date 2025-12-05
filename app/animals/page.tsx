'use client'

import AnimalsCards from '@/modules/animals/components/AnimalsCards'

const AnimalsPage = () => {
	return (
		<div>
			<h2 className='text-3xl font-semibold'>Страница с животными</h2>
			<div className='mt-4'>
				<AnimalsCards />
			</div>
		</div>
	)
}

export default AnimalsPage
