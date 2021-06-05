import React from 'react'
import ReactDOM from 'react-dom';

function tick() {
    const element = (
        <span>{new Date().toLocaleTimeString()}</span>
    );
    // highlight-next-line
    ReactDOM.render(element, document.getElementById('time'));
}
  
setInterval(tick, 1000);
