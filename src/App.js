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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboardLayout from "./pages/AdminDashboardLayout";
import { Contact } from "./pages/Contact";
import { Article } from "./pages/Article";

function App() {
  return (
    <Provider store={store}>
    <div className="flex flex-col justify-between">
      <div>
        <Nav />
      </div>
      <Router>
        <Routes>
          <Route path="/blog" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/article" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminDashboardLayout /> } />

          {/* add admin routes with layouts */}

          <Route path="*" element={<Navigate to="/blog" replace />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
    </Provider>
  );
}

export default App;
