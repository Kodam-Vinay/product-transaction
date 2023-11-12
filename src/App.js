import { Provider } from "react-redux";
import "./App.css";
import TransactionDashBoard from "./components/TransactionDashBoard";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-[#edf6f6] w-full min-h-screen p-2">
        <TransactionDashBoard />
      </div>
    </Provider>
  );
}

export default App;
