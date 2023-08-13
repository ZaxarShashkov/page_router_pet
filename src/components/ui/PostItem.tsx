import { IPostDataSingle } from '@/interfaces/post.interface';
import React, { FC } from 'react';

type Props = {};

const PostItem: FC<IPostDataSingle> = ({ post }) => {
	return (
		<div style={{ marginTop: '10px', padding: '5px' }}>
			<h4>
				{post.id}.{post.title}
			</h4>
			<p>{post.body}</p>
		</div>
	);
};

export default PostItem;
