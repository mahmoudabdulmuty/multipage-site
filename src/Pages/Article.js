import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export default function Article() {
	const { id } = useParams();
	const url = 'http://localhost:3000/articles/' + id;
	const { data: article, error, isPending } = useFetch(url);
	return (
		<div>
			{isPending && <div>Loading ...</div>}
			{error && { error }}
			<h2>{article.title}</h2>
			<h3>by: {article.author}</h3>
			<p>{article.body}</p>
		</div>
	);
}
