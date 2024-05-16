import { useState } from "react";
import "../styles/App.scss";
import initialData from "../services/initialData.json";
import Gallery from "./Gallery";
import Form from "./Form";
import FilterForm from "./FilterForm";

function App() {
  //Variables de estado
  const [gallery, setGallery] = useState(initialData);
  const [newClub, setNewClub] = useState({
    name: "",
    openOnWeekdays: false,
    openOnWeekend: false,
  });
  const [filter, setFiltered] = useState(""); //Esto será un string

  //Funciones
  const changeNewClub = (key, value, checked) => {
    newClub.id = gallery.length + 1;
    if (key === "name") {
      setNewClub({ ...newClub, name: value });
    } else {
      setNewClub({ ...newClub, [key]: checked });
    }
  };

  const addNewClub = () => {
    setGallery([...gallery, newClub]);
  };

  const filterClubs = (value) => {
    setFiltered(value);
  };



  const removeClub = (index) => {
    console.log(index);
    const updatedGallery = [...gallery]; // Crear una copia del array original, porque si hago un .splice() sobre el original lo cambio directamente, y mejor no liarla. 
    updatedGallery.splice(index, 1); // Eliminar un elemento en el índice especificado
    setGallery(updatedGallery); // Actualizar el estado con el nuevo array
  };
  

  const filterArray = gallery.filter((item) => {
    if (filter === "openOnWeekdays") {
      return item.openOnWeekdays;
    } else if (filter === "openOnWeekend") {
      return item.openOnWeekend;
    }
    return true; // Si no hay filtro, muestra todos los elementos. También valdría escribir return gallery; porque me devuelve el mismo array inicial
  });

  return (
    <main className="main">
      <h1>Mis clubs</h1>
      <FilterForm filterClubs={filterClubs} />
      <Gallery data={filterArray} removeClub={removeClub} />
      <Form changeNewClub={changeNewClub} addNewClub={addNewClub} />
    </main>
  );
}

export default App;
