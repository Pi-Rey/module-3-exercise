import Card from './Card';
import PropTypes from "prop-types";

function Gallery({ data }) {
  return (
    <ul>
      {data.map((club, i) => (
        <li key={i}>
          <Card club={club} clubId={i} />
        </li>
      ))}
    </ul>
  );
}


Gallery.propTypes = {
data: PropTypes.array
}

export default Gallery;
