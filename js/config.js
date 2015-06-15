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