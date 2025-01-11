import React from 'react';
import ReactDOM from 'react-dom/client';


import reportWebVitals from './reportWebVitals';
import Header from './components/header/header'
import BannerCarousel from './components/banner/banner';
import FAQ from './components/faq/faq';
import LifeStyle from './components/lifestyle/lifestyle';
import Reviews from './components/userreview/review';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <BannerCarousel/>
    <Reviews/>
    <LifeStyle/>
    <FAQ/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
