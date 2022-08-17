import Dictionary from './Dictionary';
import './App.css';

export default function App() {
  return (
    <div className='App'>
       <div className='container'>
        <header className="App-header">
          <h1>
            Dictionary
          </h1>
        </header>
       </div>
       <main>
        <Dictionary />
       </main>
       <footer>
          <a href='https://github.com/YuliaYurievna/react-dictionary-app' rel='noreferrer' target='_blank'>Open-source code</a>, by Yuliia Poddiacha
        </footer>   
    </div>
  );
}