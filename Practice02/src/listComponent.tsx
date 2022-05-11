import React from 'react';

interface ListComponentProps{
	array: number[],
}

const ListComponent = ({ array }: ListComponentProps): JSX.Element => {
	const listItem = array.map((n: number) => <li>{n}</li>);

	return (<ul>{listItem}</ul>);
}

export default ListComponent;