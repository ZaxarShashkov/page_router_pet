import Layout from '@/components/layout/Layout';
import Posts from '@/components/screens/Posts/Posts';
import { IPostData } from '@/interfaces/post.interface';
import { Api } from '@/services/PostService';
import { GetServerSideProps, GetStaticProps } from 'next';
import React, { PropsWithChildren, FC, ReactNode } from 'react';

const AboutPage: FC<IPostData> = ({ posts }): JSX.Element => {
	return (
		<Layout>
			<Posts posts={posts} />
		</Layout>
	);
};

// SSG
// export const getServerSideProps: GetServerSideProps<IPostData> = async () => {
// 	const posts = await Api.getAll();

// 	return {
// 		props: { posts },
// 	};
// };

// ISR
export const getStaticProps: GetStaticProps<IPostData> = async () => {
	const posts = await Api.getAll();

	return {
		props: { posts },
		revalidate: 60,
	};
};

export default AboutPage;
