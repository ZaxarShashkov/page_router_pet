import { IPost } from '@/interfaces/post.interface';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

axios.defaults.baseURL = API_URL;

export const Api = {
	async getAll() {
		const { data } = await axios.get<IPost[]>('/posts');
		return data;
	},

	async getById(id: number | undefined) {
		const { data } = await axios.get<IPost[]>(`/posts/${id}`, {
			params: {
				id,
			},
		});
		return data[0];
	},
};
