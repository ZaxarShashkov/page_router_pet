import Link from 'next/link';
import React, { FC } from 'react';
import styles from './Header.module.scss';
import { useRouter } from 'next/router';
import cn from 'classnames';

type Props = {};

const Header: FC = (): JSX.Element => {
	const { asPath, pathname, query } = useRouter();

	console.log(pathname === '/');

	return (
		<header className={styles.header}>
			<Link
				href='/'
				className={cn(styles.home, {
					[styles.home_active]: pathname === '/',
				})}>
				Home
			</Link>
			<Link
				href='/posts'
				className={cn(styles.about, {
					[styles.about_active]: pathname === '/posts',
				})}>
				Posts
			</Link>
		</header>
	);
};

export default Header;
