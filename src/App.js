import "./App.css";
import { initApp } from "./services/firebase.service";
import { MainView } from "./views/MainView";

function App() {
  initApp();
  
  return (
    <div className="App">
      <MainView />
    </div>
  );
}

export default App;