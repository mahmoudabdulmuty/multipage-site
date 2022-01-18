import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import './Home.css';
export default function Home() {
	const {
		data: articles,
		error,
		isPending
	} = useFetch('http://localhost:3000/articles');
	return (
		<div className="home">
			<h2>Articles</h2>
			{isPending && <div>Loading ...</div>}
			{error && <div>{error}</div>}
			{articles.map((article) => (
				<article key={article.id} className="card">
					<h3 className="title">{article.title}</h3>
					<p className="author">{article.author}</p>
					<Link to={`/articles/${article.id}`}>Read more ...</Link>
				</article>
			))}
		</div>
	);
}
