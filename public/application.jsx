var React = require('react');
var Fluxxor = require('fluxxor');

var App = require('./app/components/App.jsx');

var flux = new Fluxxor.Flux(require('./app/stores'), require('./app/actions'));
React.render(<App flux={flux} />, document.getElementById('appContainer'));
