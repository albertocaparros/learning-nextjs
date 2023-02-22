type logoProps = {
	className: string;
};

export default function Logo({ className }: logoProps) {
	return (
		<img className={`${className} -scale-x-100`} src='/logo.png' alt='Logo' />
	);
}
