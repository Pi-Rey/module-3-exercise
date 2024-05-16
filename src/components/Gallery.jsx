import Card from './Card';
import PropTypes from "prop-types";

function Gallery({ data, removeClub }) {
  return (
    <ul>
      {data.map((club, i) => (
        <li key={i}>
          <Card club={club} clubId={i} removeClub={removeClub} />
        </li>
      ))}
    </ul>
  );
}


Gallery.propTypes = {
data: PropTypes.array,
removeClub: PropTypes.func
}

export default Gallery;
