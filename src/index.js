import React from 'react';
import ReactDOM from 'react-dom';

const user = {
  avatarUrl: 'https://reactjs.org/logo-180x180.png'
}

// use quotes to specify string literals as attributes
const element1 = <a href="https://www.reactjs.org"> link </a>;

// use curly braces to embed a JavaScript expression in an attribute
const element2 = <img src={user.avatarUrl}></img>;

const element = (
  // uses camelCase property naming convention instead of HTML attribute names
  <div className='ele' tabIndex={1}>
    {element1}
    {element2}
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
