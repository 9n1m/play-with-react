import React from 'react';
import ReactDOM from 'react-dom';

const user = {
  avatarUrl: 'https://reactjs.org/logo-180x180.png'
}

// If a tag is empty, you may close it immediately with />, like XML
const element1 = <img src={user.avatarUrl} />;

// JSX tags may contain children
const element2 = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);

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
