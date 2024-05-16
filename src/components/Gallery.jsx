import Card from './Card';

function Gallery({ data }) {
  return (
    <ul>
      {data.map((club, i) => (
        <li key={i}>
          <Card club={club} />
        </li>
      ))}
    </ul>
  );
}

export default Gallery;
