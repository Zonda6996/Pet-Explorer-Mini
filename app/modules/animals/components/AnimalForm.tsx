import { useForm } from 'react-hook-form'
import { FormValues } from '../types/FormValues'
import { Button } from '@/ui/button'

const AnimalForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>()

	const onSumbit = (data: FormValues) => {
		console.log(data)
	}

	return (
		<div className='flex flex-col items-center mt-4 pb-10 max-w-[500px] mx-auto'>
			<h3 className='font-semibold text-lg'>Пожалуйста, заполните форму:</h3>
			<form
				className=' flex flex-col p-4 items-center border border-black dark:border-white rounded-xl mt-4'
				onSubmit={handleSubmit(onSumbit)}
			>
				<div className='flex flex-col gap-2 mb-4 max-w-full'>
					<label>Никнейм</label>
					<input
						className='border border-black dark:border-white w-[300px] rounded-xl p-1'
						{...register('username', { required: 'Введите никнейм' })}
					/>
					{errors.username && (
						<span className='text-red-500 text-sm'>
							{errors.username.message}
						</span>
					)}
				</div>
				<div className='flex flex-col gap-2 mb-4 w-[300px]'>
					<label>Комментарий</label>
					<input
						className='border border-black dark:border-white rounded-xl p-1'
						{...register('comment')}
					/>
				</div>
				<Button className='w-1/2' type='submit'>
					Сохранить
				</Button>
			</form>
		</div>
	)
}

export default AnimalForm
