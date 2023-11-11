import Footer from 'components/Atoms/Footer';
import AppRouter from 'components/Router';

const AppTemplate = ({ init, isLoggedIn }) => {
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
      <Footer />
    </>
  );
}

export default AppTemplate;
