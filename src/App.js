import React, { useState } from 'react';

import data from './data'
import Categories from './Components/Categories';
import Menu from './Components/Menu';

const categories = ['all', ...new Set(data.map(item => item.category))]

function App() {

  const [shownItems, setShownItems] = useState(data)

  const filterItems = (category) => {
    if (category === 'all') {
      setShownItems(data)
      return
    }
    const newItems = [...data.filter(item => item.category === category)]
    setShownItems(newItems)

  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>React menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu shownItems={shownItems} />
      </section>
    </main>
  );
}

export default App;
