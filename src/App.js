import { useEffect } from "react";
import "./App.css";
import { initApp } from "./services/firebase.service";
import { MainView } from "./views/MainView";
import { Provider } from "react-redux";
import { appStore } from "./store";

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <MainView />
      </div>
    </Provider>
  );
}

export default App;
