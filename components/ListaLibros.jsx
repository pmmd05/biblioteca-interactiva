import libros from '../data/libros.json';   // Carga los datos de libros
import { useState } from 'react';           // Hook useState para manejo de estado
import '../App.css';                        // Importa estilos de la aplicación


function ListaLibros() { 
    // Extrae el array de categorías desde el JSON
    const categorias = libros.libros.categorias;
    // Estado para el tema seleccionado en el filtro; inicia en 'Todos'
    const [filtro, setFiltro] = useState('Todos');

    // Construye la lista de temas disponibles para el <select>
    // Incluye 'Todos' + cada nombre de categoría
    const temasDisponibles = ['Todos', categorias.map(cat => cat.nombre)];

    // Filtra los libros según el tema seleccionado:
    // 1) Filtro: si filtro es 'Todos', mantiene todas; si no, solo la categoría igual al filtro
    // 2) flatMap: de cada categoría filtrada extrae su array de libros
    // 3) Para cada libro, agrega el campo 'tema' con el nombre de su categoría
    const librosFiltrados = categorias
    .filter(cat => filtro === 'Todos' || cat.nombre === filtro)
    .flatMap(cat => cat.libros.map(libro => ({ ...libro, tema: cat.nombre })));

    return (
        <div>
            {/* Título de la sección */}
            <h2>Biblioteca Interactiva</h2>
            {/* Filtro por tema */}
            <label htmlFor="filtro-tema">Filtrar por tema:</label>
            <select id="filtro-tema" value={filtro} onChange={e => setFiltro(e.target.value) /*Actualiza el estado 'filtro' al cambiar la selección */}>
                {temasDisponibles.map((tema, i) => (
                <option key={i} value={tema}>
                {tema}
                </option>
                ))}
            </select>

            {/* Contenedor de tarjetas de libros */}
            <div className="lista-libros">
                {librosFiltrados.map((libro, index) => (
                 <div key={index} className="card-libro">
                    {/* Datos del libro */}
                    <h3>{libro.titulo}</h3>
                    <p><strong>Autor:</strong> {libro.autor}</p>
                    <p><strong>Editorial:</strong> {libro.editorial}</p>
                    <p><strong>Edición:</strong> {libro.edicion}</p>
                    <p><strong>Nivel:</strong> {libro.nivel}</p>
                    <p><strong>Tema:</strong> {libro.tema}</p>
                    <p><strong>¿Por qué leerlo?</strong> {libro.porQue}</p>
                    {/* Enlace al recurso externo */}
                    <a
                        href={libro.linkCompra}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ver recurso
                    </a>
                </div>
            ))}
            </div>
        </div>
    );

} 

export default ListaLibros; // Exporta el componente para usarlo en App.jsx