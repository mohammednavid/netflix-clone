import React from 'react';
import ReactDOM from 'react-dom';
import Data from './Data';
import App from './App';
import './App.css';



ReactDOM.render(
  <>
  <header>
      <img className="logo" src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=21" />
      <ul className="nav_links">
          <li><a href="#">Home</a></li>
          <li><a href="#">about</a></li>
                <li><a href="#">contact us</a></li>
      </ul>
      <a className="cta" href="#"><button>SUBSCRIBE</button></a>
  </header>
  {Data.map((value) => {
      return (<App
        imgsrc={value.imgsrc}
        name={value.name}
        Vtype={value.Vtype}
        />
  )
})}
  </>,document.getElementById('root'));