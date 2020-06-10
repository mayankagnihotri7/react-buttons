import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var icon = (
  <svg
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

function Button(props) {
  function getClassName(){
    if (props.size) {
        if (props.size === 'lg') {
            return 'large'
        } else if (props.size === 'sm') {
            return 'small'
        }
    }
  }
  function Type () {
      if (props.type) {
          if (props.type === 'flat') {
              return 'flat';
          } else if (props.size === 'outlined') {
              return 'outline'
          }
      }
  }
  function Icon () {
      if (props.icon) {
          return icon;
      }
  }
  var names = [getClassName(), Type()].join(' ').trim();
  
  if (names) {
  return <button className={names}>{props.text || 'Sample Text'}{Icon()}</button>;
  }

  return (
    <button>
      {props.text || "Sample Text"}
      {Icon()}
    </button>
  );
}

function App () {
    return (
      <>
        <Button text="solid" />
        <Button text="outlined" type="outlined" />
        <Button text="flat" type="flat" />
        <Button text="large" size="lg" />
        <Button text="medium" />
        <Button size="sm" text="small" />
        <Button size="sm" type="flat" text="flat small" />
        <Button type="outlined" size="sm" text="outlined small" />
        <Button size="lg" type="flat" icon />
        <Button size="lg" icon />
        <Button icon />
        <Button type="outlined" icon />
      </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));