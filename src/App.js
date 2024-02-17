import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Indumentaria"} />
          }
          />
          <Route path="/category/:indumentaria" element={<ItemListContainer/> }/>
          <Route path="/category/indumentaria" element={<ItemListContainer greeting={"indumentaria"} /> }/>
          <Route path="/category/selecciones" element={<ItemListContainer greeting={"selecciones"} /> }/>
          <Route path="/category/ofertas" element={<ItemListContainer greeting={"ofertas"} />} />
          <Route path="/category/novedadesydestacados" element={<ItemListContainer greeting={"novedades y destacados"} />} />
          <Route path="/category/colección" element={<ItemListContainer greeting={"colección"} />} />
          <Route path="/category/extra50offsale" element={<ItemListContainer greeting={"extra 50% off sale"} />} />
          <Route path="/item/:itemId" element={<ItemListContainer />} />
        </Routes>
        <Counter />
      </>
    );
}

export default App;