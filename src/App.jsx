import './App.css'
import {useEffect} from "react";
const tg = window.Telegram.WebApp;

function App() {
    useEffect(() => {
        tg.ready();
    }, []);

    const onClose = () => {
        tg.close();
    }

  return (
      <div className="App">
        <button onClick={onClose}>Close</button>
          <h1>Нажми кнопку</h1>
      </div>
  )
}

export default App