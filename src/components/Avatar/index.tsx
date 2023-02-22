type avatarProps = {
	img: string;
	className?: string;
};

export default function Avatar({ img, className }: avatarProps) {
	return (
		<img className={`${className} rounded-full`} src={img} alt='User avatar' />
	);
}
