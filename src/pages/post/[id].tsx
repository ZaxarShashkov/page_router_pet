import PostItem from '@/components/ui/PostItem';
import { IPostDataSingle } from '@/interfaces/post.interface';
import { Api } from '@/services/PostService';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React, { FC } from 'react';

type Props = {};

const PostPage: FC<IPostDataSingle> = ({ post }): JSX.Element => {
	const { asPath, pathname, query } = useRouter();
	console.log(query.id, 'asd');

	return <PostItem post={post} />;
};

interface Params extends ParsedUrlQuery {
	id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await Api.getAll();

	return {
		paths: posts.map((post) => ({
			params: {
				id: post.id.toString(),
			},
		})),
		fallback: 'blocking',
	};
};

export const getStaticProps: GetStaticProps<IPostDataSingle> = async ({ params }) => {
	const post = await Api.getById(Number(params?.id));
	return {
		props: { post },
		revalidate: 60,
	};
};

export default PostPage;
