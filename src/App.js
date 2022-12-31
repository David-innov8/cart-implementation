import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Amazon from './components/Amazon';
import Cart from './components/Cart';

function App() {
  return (
   <div>
    <Navbar/>
    <Amazon/>
    <Cart/>
   </div>
  );
}

export default App;
