# RequireJs - React Router

透過 RequireJs 來使用 React Router，好像可以用，您可以試試看。

Example

![http://i.imgur.com/2xlEbWg.png](http://i.imgur.com/2xlEbWg.png)


## Install


.bowerrc

```
{
	"directory": "js/vendor"
}
```

Bower packages

```
    "react-router": "~0.13.3",
    "requirejs-react-jsx": "~0.14.1",
    "requirejs": "~2.1.17"
```

Install 

```
$ bower install
```

## 使用方式

設定好 config.js 就可以用 React Router, 設定如下 ：

config.js

```
requirejs.config({
    baseUrl: 'js',
    paths: {
        'react': 'vendor/react/react-with-addons',
        'JSXTransformer': 'vendor/react/JSXTransformer',
        'jsx': 'vendor/requirejs-react-jsx/jsx',
        'text': 'vendor/requirejs-text/text',
        'react-router': 'vendor/react-router/build/umd/ReactRouter',
        'react-router-shim': 'shim/react-router-shim',
    },
    shim: {
        'react': {
            'exports': 'React'
        },
        'JSXTransformer': 'JSXTransformer',
        'react-router-shim': {
            'exports': 'React'
        },
        'react-router': {
            'deps': ['react-router-shim'],
            'exports': 'ReactRouter'
        },
    },
    config: {
        jsx: {
            fileExtension: '.jsx',
            transformOptions: {
                harmony: true,
                stripTypes: false,
                inlineSourceMap: true
            },
            usePragma: false
        }
    }
});
```

app.jsx
```
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
```

可以用 jsx，es6 語法

# Building

最後您可以透過 r.js 打包專案

```
$ r.js -o build.js
```


# 備註

參考 [react-router](https://github.com/rackt/react-router)
