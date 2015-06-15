define(function (require) {

    var React = require('react'),
        Router = require('react-router'),
        Header = require('jsx!components/Header'),
        Footer = require('jsx!components/Footer'),
        Home = require('jsx!components/Home'),
        Page1 = require('jsx!components/Page1'),
        Page2 = require('jsx!components/Page2'),
        Page3 = require('jsx!components/Page3');

    var DefaultRoute = Router.DefaultRoute,
        Link = Router.Link,
        Route = Router.Route,
        RouteHandler = Router.RouteHandler;

    var App = React.createClass({

        render: function() {
            return (
                <div>
                    <Header />
                    <ul>
                        <li><Link to="app">Home</Link></li>
                        <li><Link to="page1">Page 1</Link></li>
                        <li><Link to="page2">Page 2</Link></li>
                        <li><Link to="page3">Page 3</Link></li>
                    </ul>
                    <RouteHandler />
                    <Footer />
                </div>
            );
        }

    });

    var routes = (
        <Route name="app" path="/" handler={App}>
            <Route name="page1" handler={Page1} />
            <Route name="page2" handler={Page2} />
            <Route name="page3" handler={Page3} />
            <DefaultRoute handler={Home} />
        </Route>
    );

    Router.run(routes, function (Handler) {
        React.render(<Handler />, document.getElementById('app'));
    });

});