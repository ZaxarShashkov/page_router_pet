import Head from 'next/head';
import React, { FC, PropsWithChildren, ReactNode } from 'react';

interface IMeta {
	title: string;
	description?: string;
	children?: ReactNode;
}

const Meta: FC<PropsWithChildren<IMeta>> = ({ title, description, children }: IMeta) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				{description ? (
					<>
						<meta name='description' content={description} />
						<meta name='og:title' content={title} />
						<meta name='og:description' content={description} />
					</>
				) : (
					<>
						<meta name='robots' content='noindex, nofollow' />
					</>
				)}
			</Head>
			{children}
		</>
	);
};

export default Meta;
