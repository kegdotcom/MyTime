interface IconProps {
	name: string;
}

function Icon({ name }: IconProps) {
	return <i className={"bi bi-" + name}></i>;
}

export default Icon;
