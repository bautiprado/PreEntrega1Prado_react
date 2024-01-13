//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
    return (
      <>
        <Navbar />
        <ItemListContainer greeting={"Bienvenidos a Seven Only Fútbol"} />
      </>
    );
}

export default App;