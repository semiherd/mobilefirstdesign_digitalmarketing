import './App.css';
import Primary from './component/Primary';
import Secondary from './component/Secondary';

function App() {
  return (
    <div className="app">
      <div className="app-prim">
        <Primary />
      </div>
      <div className="app-sec">
        <Secondary />
      </div>
    </div>
  );
}

export default App;
