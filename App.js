import ListaLibros from './components/ListaLibros';
import './App.css'; // Importa estilos de la aplicación

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <ListaLibros />
    </div>
  );
}
export default App;// Importa el componente ListaLibros para mostrar la lista de libros