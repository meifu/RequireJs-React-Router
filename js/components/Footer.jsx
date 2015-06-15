define(function (require) {

    var React = require('react');

    var Footer = React.createClass({

        render: function() {
            return (
                <footer>
                    &copy; 2015
                </footer>
            );
        }

    });

    return Footer;

});