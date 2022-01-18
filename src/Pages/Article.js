import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export default function Article() {
	const { id } = useParams();
	const url = 'http://localhost:3000/articles/' + id;
	const { data: article, error, isPending } = useFetch(url);
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			if (error) navigate('/');
		}, 2000);
	}, [error, navigate]);
	return (
		<>
			{isPending && 'Loading ...'}
			{error && <>{error}</>}
			{article && (
				<>
					<h2>{article.title}</h2>
					<h3>by: {article.author}</h3>
					<p>{article.body}</p>
				</>
			)}
		</>
	);
}
