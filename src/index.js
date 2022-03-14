import React from 'react';
import ReactDOM from 'react-dom';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  // if MyComponents.DatePicker is a component, you can use it directly from JSX
  return <MyComponents.DatePicker color="blue" />;
}

const element = (
  <BlueDatePicker />
)

ReactDOM.render(
  element,
  document.getElementById('root')
);
