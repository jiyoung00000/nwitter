// react-router-dom 버전 6에서는 Switch 대신에 Routes를 사용한다.
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AuthPage from "routes/AuthPage";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "./Navigation";

const AppRouter = ({ isLoggedIn }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Routes>
                {isLoggedIn ? (
                    <>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                    </>
                ) : (
                    <Route path="/" element={<AuthPage />} />
                )}
            </Routes>
        </Router>
    );
};

export default AppRouter;