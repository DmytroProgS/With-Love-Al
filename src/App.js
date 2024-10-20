import React from 'react';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import './styles/styles.css';  // Переконайся, що шлях правильний
import '../src/components/Categories/Categories.css';
import '../src/components/Header/Header.css';
import '../src/components/Footer/Footer.css';
import './pages/HomePage/HomePage.css';

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;