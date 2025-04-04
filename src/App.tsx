import { Navbar } from '@/components/compounds/Navbar';
import { Persona } from './containers/Persona';

const App = () => (
  <div data-testid="app-container">
    <Navbar />
    <Persona />
  </div>
);

export default App;
