import React from 'react'

class Greeting extends React.Component {
 // ...
 constructor(props) {
  super(props);
  this.state = {count: props.initialCount};
 }
}

Greeting.defaultProps = {
 name: 'Mary'
};