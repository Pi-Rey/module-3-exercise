import PropTypes from "prop-types";
function FilterForm({filterClubs}) {
    const handleFilter = (ev) => {
        filterClubs(ev.target.value)
    }
  return (
    <form>
      <label htmlFor="filter">Mostrar</label>
      <select name="filter" id="filter" onChange={handleFilter} >
        <option value="">todos</option> {/* ev. volver a meter value "all" */}
        <option value="openOnWeekdays">los que abren entre semana</option>
        <option value="openOnWeekend">los que abren el fin de semana</option>
      </select>
    </form>
  );
}

FilterForm.propTypes = {
    filterClubs: PropTypes.func
}

export default FilterForm;
