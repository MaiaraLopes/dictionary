
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img className="image-top" alt="" src="https://i2.wp.com/www.revistaapolice.com.br/wp-content/uploads/2015/09/SindsegSP-lan%C3%A7a-Dicion%C3%A1rio-Bil%C3%ADngue-de-Seguros.jpg?resize=1024%2C682&ssl=1" />
      </header>
      <main>
        <Dictionary />
      </main>
    </div>
    
    <p className="footer">Coded by <a href="https://github.com/MaiaraLopes/dictionary" target="_blank" rel="noreferrer">Maiara Lopes</a></p>
    </div>
  );
  
}

export default App;
