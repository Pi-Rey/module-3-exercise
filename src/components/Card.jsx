import PropTypes from "prop-types";
function Card({ club, clubId }) {
  return (
    <article className="card">
      <h3>#{clubId+1} {club.name}</h3>
      <p>Abierto entre semana: {(club.openOnWeekdays === true) ? `Sí` : `No`}</p>
      <p>Abierto el fin de semana: {(club.openOnWeekend === true) ? `Sí` : `No`}</p>
    </article>
  );
}

Card.propTypes = {
    club: PropTypes.object,
    clubId: PropTypes.number
}
export default Card;
