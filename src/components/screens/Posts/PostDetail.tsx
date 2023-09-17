import Layout from '@/components/layout/Layout';
import { IPostData, IPostDataSingle } from '@/interfaces/post.interface';
import React, { FC } from 'react';
import PostItem from '@/components/ui/PostItem';

type Props = {};

const PostDetail: FC<IPostDataSingle> = ({ post }) => {
	return <PostItem post={post} />;
};

export default PostDetail;
