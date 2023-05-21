import React, { useState } from "react";

const Categories = ({ categories,filterItems }) => {
  const [currentCategory, setCurrentCategory] = useState('all')

  const clickHandler = category => {
    setCurrentCategory(category)
    filterItems(category)
  }

  return (
    <div className="btn-container">
      {categories.map((category,index) => <button key={index} 
        type="button"
        className={category === currentCategory ? 'filter-btn highlight' : 'filter-btn'}
        onClick={() => clickHandler(category)}
      >
        {category}
      </button>)}
    </div>
  );
};

export default Categories;
