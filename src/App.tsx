import './App.scss';
import { Navbar } from './components/Navbar';
import { HomePage } from './containers/HomePage';

const App = () => {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
};

export default App;
