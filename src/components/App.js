import AppRouter from "components/Router";
import { authService } from "fbase";
import { useEffect, useState } from "react";
import { AppFooter } from "styles/AppStyle";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
  <>
    {init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} /> : "Initializing..."}
    <AppFooter>&copy; {new Date().getFullYear()} Nwitter</AppFooter>
  </>
  )
}

export default App;
