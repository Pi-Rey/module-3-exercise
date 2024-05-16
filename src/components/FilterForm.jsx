import PropTypes from "prop-types";
function FilterForm({filterClubs}) {
    const handleFilter = (ev) => {
        filterClubs(ev.target.value)
        //aquí podría haberme pasado directamente setFiltered y simplemente escribir en la funcion manejadora: 
        //    setFiltered(ev.target.value);
        //esto funciona porque no tengo que hacer ninguna movida más, solo darle su nuevo valor.
        //Pero hay un modo aun más limpio de hacerlo, poniendo la función esta directamente al escuchar el evento, porque solo es una línea de código [mirar línea 13].  
    }
  return (
    <form>
      <label htmlFor="filter">Mostrar</label>
      <select name="filter" id="filter" onChange={handleFilter} > {/* Si me hubiera traido setFiltered podría haber escrito aquí: onChange={(ev) => setFiltered(ev.target.value)} */}
        <option value="all">Todos</option> {/* ev. volver a meter value "all" */}
        <option value="openOnWeekdays">Los que abren entre semana</option>
        <option value="openOnWeekend">Los que abren el fin de semana</option>
      </select>
    </form>
  );
}

FilterForm.propTypes = {
    filterClubs: PropTypes.func
}

export default FilterForm;
