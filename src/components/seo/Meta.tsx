import Head from 'next/head';
import React, { FC, PropsWithChildren } from 'react';

interface IMeta {
	title: string;
	description?: string;
}

const Meta: FC<PropsWithChildren<IMeta>> = ({ title, description }: IMeta) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				{description ? (
					<meta></meta>
				) : (
					<meta name='robots' content='noindex, nofollow'></meta>
				)}
			</Head>
		</>
	);
};

export default Meta;
