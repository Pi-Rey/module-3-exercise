import { useState } from 'react';
import '../styles/App.scss';
import initialData from "../services/initialData.json"
import Gallery from './Gallery';

function App() {
const [gallery, setGallery] = useState(initialData);
  return (
    <>
      <h1>Mis clubs</h1>
      <Gallery data={gallery}/>
    </>
  );
}

export default App;