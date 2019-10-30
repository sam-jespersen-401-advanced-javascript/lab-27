import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Character from './Character';
import characters from '../../public/data';

const chars = characters.map(char => {
  return <Character
    key={char.name}
    name={char.name}
    img={char.img}
    species={char.species}
    quote={char.quote}
  />;
});


const App = () => (
  <>

    <Header />
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {[...chars]}
    </div>
    <Footer />

  </>
);

export default App;
