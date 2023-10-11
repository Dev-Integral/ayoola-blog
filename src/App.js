import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./component/Nav";
import { Provider } from "react-redux";
import store from "./redux/store";
import Details from "./pages/Details";

function App() {
  return (
    <Provider store={store}>
    <div className="flex flex-col justify-between">
      <div>
        <Nav />
      </div>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
