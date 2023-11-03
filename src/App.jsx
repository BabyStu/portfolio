
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import '../output.css'


const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
