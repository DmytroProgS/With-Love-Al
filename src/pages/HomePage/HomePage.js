import React from 'react';
import Categories from '../../components/Categories/Categories';

function HomePage() {
  return (
    <div>
      <section className="banner">
        <h1 className='slogan'>With_love_al</h1>
        <h2>Etno прикраси(сережки...) <br/>відправка по Україні та Європі.</h2>
      </section>
      <Categories />
    </div>
  );
}

export default HomePage;
