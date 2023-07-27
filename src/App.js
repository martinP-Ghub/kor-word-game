import logo from './logo.svg';
import './App.css';

function App() {
  function isValidHangul(code) {
    // 유효한 한글 음절 범위 (초성, 중성, 종성)
    return code >= 0xAC00 && code <= 0xD7A3 && (code % 28 !== 0);
  }

  function getRandomHangul() {
    let randomCode;
    do {
      const initialCode = 0xAC00;
      const finalCode = 0xD7A3;
      randomCode = initialCode + Math.floor(Math.random() * (finalCode - initialCode));
    } while (!isValidHangul(randomCode));

    return String.fromCharCode(randomCode);
  }

  const hangulCharacters = [];
  for (let i = 0; i < 10; i++) {
    hangulCharacters.push(getRandomHangul());
  }

  console.log(hangulCharacters.join(" "));


  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
