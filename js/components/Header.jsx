define(function (require) {

    var React = require('react');

    var Header = React.createClass({

        render: function() {
            return (
                <h1>RequireJS - React Router</h1>
            );
        }

    });

    return Header;

});