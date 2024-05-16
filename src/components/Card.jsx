import PropTypes from "prop-types";
function Card({ club, clubId, removeClub }) {
    const handleRemove = (ev) => {
        console.log(ev.target.id)
        removeClub(ev.target.id)
    }
  return (
    <article className="card">
      <button className="xButton" id={clubId} onClick={handleRemove}>X</button>
      <h3>
        #{clubId + 1} {club.name}
      </h3>
      <p>Abierto entre semana: {club.openOnWeekdays === true ? `Sí` : `No`}</p> {/* también valdría y quedaría más limpio y ordenador con {club.openOnWeekdays ? `Sí` : `No`}, lo voy a poner en el operador ternario de abajo*/}
      <p>
        Abierto el fin de semana: {club.openOnWeekend ? `Sí` : `No`} {/* Esto se llamada "renderizado condicional" */}
      </p>
    </article>
  );
}

Card.propTypes = {
  club: PropTypes.object,
  clubId: PropTypes.number,
  removeClub: PropTypes.func
};
export default Card;
