import "./App.css";
import HomePage from "./containers/HomePage/index";
import SignInPage from "./containers/SignInPage/index";
import SignUpPage from "./containers/SignUpPage/index";
import ResetPasswordPage from "./containers/ResetPasswordPage/index";

import PrivateRoute from "./containers/PrivateRoute";

import { AuthProvider } from "./contexts/AuthContext";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/reset" element={<ResetPasswordPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
