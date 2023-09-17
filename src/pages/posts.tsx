import Layout from '@/components/layout/Layout';
import PostDetail from '@/components/screens/Posts/PostDetail';
import { IPostData } from '@/interfaces/post.interface';
import { Api } from '@/services/PostService';
import { GetServerSideProps, GetStaticProps } from 'next';
import React, { PropsWithChildren, FC, ReactNode } from 'react';
import PostItem from '@/components/ui/PostItem';

const AboutPage: FC<IPostData> = ({ posts }): JSX.Element => {
	return (
		<Layout>
			{/* <PostDetail post={post}></PostDetail> */}
			<>{posts.length ? posts.map((post) => <PostItem post={post} />) : 'Post not found'}</>;
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
