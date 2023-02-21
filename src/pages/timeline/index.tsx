import Link from 'next/link';

export default function Timeline() {
	return (
		<>
			<h1 className='text-lg font-bold text-center dark:text-cyan-50'>
				Timeline
			</h1>

			<Link
				href='/'
				className='text-lg font-bold text-center dark:text-cyan-50'>
				Go to home
			</Link>
		</>
	);
}
