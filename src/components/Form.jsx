import PropTypes from "prop-types";

function Form({ changeNewClub, addNewClub }) {
  const handleChange = (ev) => {
    changeNewClub(ev.target.id, ev.target.value, ev.target.checked);
    //si hubieramos decidido crear la función con un solo parámetro, podria haber hecho lo siguiente:
    /*
            //esta primera línea es para usar o bien el value del evento o el checked de los checkbox
            const value = ev.target === "name" ? ev.target.value : ev.target.checked
            const object = {key: ev.target.id, value: ev.target.value}
            changeNewClub(object)
             */
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    addNewClub();
  };

  return (
    <fieldset className="fieldset">
      <form> {/* aquí dentro podría haber colocado el onChange={handleChange} y así no necesito poner en cada input */}
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
      </form>
    </fieldset>
  );
}

Form.propTypes = {
  changeNewClub: PropTypes.func,
  addNewClub: PropTypes.func,
};

export default Form;
