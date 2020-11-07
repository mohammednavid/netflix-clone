import React from 'react';
import Data from './Data';
import './App.css';


const App = (props) => {
    return(
           <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} className="card_img" />
                    <div className="card_info">
                        <span className="card_category">{props.Vtype}</span>
                        <h3 className="card_title">{props.name}</h3>
                        <a href="" target="_blank">
                            <button className='button'>Watch Now</button> 
                        </a> 
                    </div> 
                </div>
            </div>
    )};




export default App;