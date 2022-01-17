import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<nav>
					<h1>My Articles</h1>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/contact">Contact</NavLink>
				</nav>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
