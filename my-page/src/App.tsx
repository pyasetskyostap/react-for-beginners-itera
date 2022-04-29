import './App.css';

const Footer = () => (
	<footer>2022</footer>
)

const user = { userName: 'Nethan' }
const title = { userTitle: 'Front-End Developer' }
const language = { userLanguage: 'English' }

const App = () => (
	<div className="App">
		<h1 className='First'>Hi, my name is {user.userName}</h1>
		<h2 className='Second'>I'm a {title.userTitle}</h2>
		<h3 className='Third'>My mother tongue is {language.userLanguage}</h3>
		<Footer />
	</div>
)

export default App;
