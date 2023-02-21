import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Twitter clone</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='container'>
				<h1 className='text-center font-bold text-lg dark:text-cyan-50'>
					Hola mundolo
				</h1>
			</main>
		</>
	);
}
