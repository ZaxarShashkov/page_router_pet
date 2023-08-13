import Layout from '@/components/layout/Layout';
import { IPostData } from '@/interfaces/post.interface';
import React, { FC } from 'react';
import PostItem from '@/components/ui/PostItem';

type Props = {};

const Posts: FC<IPostData> = ({ posts }) => {
	return <>{posts.length ? posts.map((post) => <PostItem post={post} />) : 'Post not found'}</>;
};

export default Posts;
