import Dictionary from './Dictionary';
import './App.css';

export default function App() {
  return (
    <div className='App'>
       <div className='container'>
        <header className="App-header">
          <h1>
            Dictionary 📜
          </h1>
        </header>
       </div>
        <Dictionary defaultKeyword='sunset' />
       <footer>
        This project was coded by Yuliia Poddiacha and is {''}
          <a href='https://github.com/YuliaYurievna/react-dictionary-app' rel='noreferrer' target='_blank'>open-source code on GitHub</a> and <a href='https://dapper-panda-0370f5.netlify.app' rel='noreferrer' target='_blank'>hosted on Netlify</a>
        </footer>   
    </div>
  );
}