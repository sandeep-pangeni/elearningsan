import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Section } from './components/header/Section';
import { Home } from './pages/Home';
import { Footer } from './components/footer/Footer';
import About from './pages/About';


export const App = () => {
  return (
    <div>
      <Header />
      <Section />
      <Home />
      <Footer />
      <BrowserRouter>
      
      </BrowserRouter>
    </div>
  )
}
