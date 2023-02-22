import Avatar from '@/components/Avatar';
import Logo from '@/components/Logo';

export default function HomePage() {
	return (
		<>
			<div className='h-screen text-orange-50'>
				<header className='fixed flex w-full h-[53px] border-b border-slate-500 items-center'>
					<div className='flex-1'>
						<Avatar
							className='h-8 mt-auto ml-4 align-middle'
							img='https://i.pravatar.cc/250'></Avatar>
					</div>
					<Logo className='h-6 m-auto'></Logo>
					<div className='flex-1'></div>
				</header>
				<section className='pt-24'></section>
				<nav className='fixed bottom-0 w-full h-12 border-t border-slate-500'>
					asdf
				</nav>
			</div>
		</>
	);
}
