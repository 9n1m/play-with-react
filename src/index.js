import React from 'react';
import ReactDOM from 'react-dom';

// These two examples are identical
const element1 = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

const element2 = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);

const element = (
  <div>
    {element1}
    {element2}
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
