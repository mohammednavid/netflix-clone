import React from 'react';
import App from './App';
import Data from './Data';

const Bar = () => {
    const nCard = (value) => {
        return(<App
              imgsrc={value.imgsrc}
              name={value.name}
              Vtype={value.Vtype}
              />
    )
};
Data.map(nCard);
};

    

export default Bar;