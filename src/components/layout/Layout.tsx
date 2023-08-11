import React, { FC, PropsWithChildren, ReactNode } from 'react';
import Header from '../header/Header';

type LayoutProps = {
	children?: ReactNode;
};

const Layout: FC<PropsWithChildren<unknown>> = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};

export default Layout;
