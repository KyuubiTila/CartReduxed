import { Header, Footer } from './components';
import { AllRoutes } from './Routes/AllRoutes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
