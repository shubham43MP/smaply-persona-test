import { Navbar } from './components/Navbar';
import { HomePage } from './containers/HomePage';

const App = () => {
  return (
    <div className="bg-lightcream">
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;
