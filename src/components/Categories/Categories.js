import React from 'react';
import CategoryCard from '../CategoryCard';
import earring1 from '../../assets/images/Butterfly-removebg-preview.png';  // Перевір наявність цих файлів
import necklace from '../../assets/images/earrings-removebg-preview.png';
import earring2 from '../../assets/images/Necklace-removebg-preview.png';


function Categories() {
  return (
    <section className="categories">
      <h3>Categories</h3>
      <p>Lorem losum sit amet constructoe aspiscing do elmod tempor...</p>
      <div className="category-grid">
      <a href="/"><CategoryCard image={earring1} title="Бабочки" /></a>
      <a href="/earrings"> <CategoryCard image={necklace} title="Сережки" /></a>
      <a href="/"> <CategoryCard image={earring2} title="Намиста" /></a>
      </div>
    </section>
  );
}

export default Categories;
