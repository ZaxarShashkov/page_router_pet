import Image from 'next/image';
import React from 'react';
import gif from '../../public/404-error-dribbble-800x600.gif';
import styles from '@/components/screens/home/Home.module.scss';
import Link from 'next/link';
import Head from 'next/head';
import Meta from '@/components/seo/Meta';

type Props = {};

const Page404 = (props: Props): JSX.Element => {
	return (
		<>
			<Meta title='Page not found' />
			<div className={styles.page__404}>
				<Image src={gif} alt={'404'}></Image>
				<p className={styles.page__404_text}>Page not found</p>
				<Link href={'/'} className={styles.page__404_home}>
					Go home
				</Link>
			</div>
		</>
	);
};

export default Page404;
