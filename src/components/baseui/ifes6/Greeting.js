var createReactClass = require('create-react-class');


var Greeting = createReactClass({
  render: function() {
    return <h1>Hello, {this.props.name}</h1>;
  },

  // ES6 classes. This means that they don’t automatically bind this to the instance. You’ll have to explicitly use .bind(this) in the constructor:
  // this is not necessary because it binds all methods
  getDefaultProps: function() {
    return {
      name: 'Mary'
    };
  },

  getInitialState: function() {
    return {count: this.props.initialCount};
  },
});