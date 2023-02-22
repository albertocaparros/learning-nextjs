type buttonProps = {
	children?: any;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	className?: string;
};

export default function Button({
	children,
	onClick,
	className,
}: buttonProps): JSX.Element {
	return (
		<>
			<button
				className={`${className} text-lg px-4 py-2 mt-4 font-medium bg-blue-500 rounded-full text-orange-50`}
				onClick={onClick}>
				{children}
			</button>
		</>
	);
}
