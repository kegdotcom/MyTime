import Icon from "./Icon";

interface TaskProps {
	name: string;
	description?: string;
	points?: number;
}

function Task({ name, description = "A task to be completed", points = 0 }: TaskProps) {
	return (
		<div>
			<h2>
				Task <Icon name="bell" />
			</h2>
			<h3>{name}</h3>
			<p>
				{description} ~ {points} points
			</p>
		</div>
	);
}

export default Task;
