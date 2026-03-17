import "./App.css";
import AppRoutes from "./AppRoutes/AppRoutes";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <AppRoutes />
      </div>
    </Provider>
  );
}

export default App;
