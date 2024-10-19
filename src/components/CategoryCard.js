import React from 'react';

function CategoryCard({ image, title }) {
  return (
    <div className="category-card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      {/* <a href="/">Shop Now</a> */}
    </div>
  );
}

export default CategoryCard;
