function Card({ club }) {
  return (
    <article className="card">
      <h3>{club.name}</h3>
      <p>Abierto entre semana: {(club.openOnWeekdays === true) ? `Sí` : `No`}</p>
      <p>Abierto el fin de semana: {(club.openOnWeekend === true) ? `Sí` : `No`}</p>
    </article>
  );
}

export default Card;
