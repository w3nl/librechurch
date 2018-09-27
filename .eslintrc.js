module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
        browser: true
    },
    globals: {
        Lang: false,
        Vue: false,
        axios: false,
        Components: false,
        Helpers: false,
        trans: false,
        trans_choice: false,
        state: false
    },
    extends: ['plugin:vue/essential', '@vue/prettier'],
    rules: {
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                closeBracket: 0,
                alignAttributesVertically: false,
                ignores: []
            }
        ],
        'no-console': 'warn',
        'no-cond-assign': 'error',
        'no-param-reassign': 'error',
        'no-return-assign': 'error',
        'no-useless-escape': 'error',
        'vars-on-top': 'error',
        camelcase: [2, { properties: 'never' }],
        'line-comment-position': ['error', { position: 'above' }],
        'linebreak-style': ['error', 'unix'],
        'max-depth': ['error', 4],
        'max-nested-callbacks': ['error', 3],
        'max-statements-per-line': ['error', { max: 1 }],
        'new-cap': 'error',
        'newline-after-var': ['error', 'always'],
        'newline-before-return': 'error',
        'no-inline-comments': 'error',
        'no-ternary': 'error',
        'no-undef': 'error',
        'no-underscore-dangle': 'error',
        'no-unused-vars': ['warn', { vars: 'all', args: 'after-used' }],
        'one-var': ['error', 'never'],
        'operator-assignment': ['error', 'always'],
        'spaced-comment': ['error', 'always'],
        'require-jsdoc': [
            'error',
            {
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: true,
                    ClassDeclaration: true,
                    FunctionExpression: true
                }
            }
        ],
        'valid-jsdoc': [
            'error',
            {
                prefer: {
                    arg: 'param',
                    argument: 'param',
                    class: 'constructor',
                    return: 'return',
                    virtual: 'abstract'
                },
                preferType: {
                    Boolean: 'boolean',
                    Number: 'number',
                    Object: 'object',
                    String: 'string'
                },
                requireReturn: false,
                matchDescription: '.+',
                requireParamDescription: false,
                requireReturnDescription: false
            }
        ],
        'prettier/prettier': ['error']
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                'prettier/prettier': ['off'],
                'vue/html-indent': ['error', 4]
            }
        }
    ]
};
