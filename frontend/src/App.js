import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './shared/components/Navigation/Header';
import Footer from './shared/components/Footer/Footer';
import ScrollToTop from './shared/components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
