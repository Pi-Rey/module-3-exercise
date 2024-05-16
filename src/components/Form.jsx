import PropTypes from "prop-types";

function Form({ changeNewClub, addNewClub }) {
  const handleChange = (ev) => {
    changeNewClub(ev.target.id, ev.target.value, ev.target.checked);
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    addNewClub();
  };

  return (
    <fieldset className="fieldset">
      <h2>Añadir un nuevo club</h2>
      <div>
        <label htmlFor="name">Nombre del club </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Salsa club"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="openOnWeekdays">¿Abre entre semana? </label>{" "}
        {/*mirar si está checked o no*/}
        <input
          type="checkbox"
          name="openOnWeekdays"
          id="openOnWeekdays"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="openOnWeekend">¿Abre los fines de semana? </label>
        <input
          type="checkbox"
          name="openOnWeekend"
          id="openOnWeekend"
          onChange={handleChange}
        />
      </div>
      <input
        className="btn"
        type="submit"
        value="Añadir un nuevo club"
        onClick={handleClick}
      />
    </fieldset>
  );
}

Form.propTypes = {
  changeNewClub: PropTypes.func,
  addNewClub: PropTypes.func,
};

export default Form;
