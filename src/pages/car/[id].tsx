import { useRouter } from 'next/router';
import React from 'react';

type Props = {};

const CarPage = (props: Props): JSX.Element => {
	const { asPath, pathname, query } = useRouter();

	return <div>CarPage{query.id}</div>;
};

export default CarPage;
