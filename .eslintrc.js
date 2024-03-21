module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': `eslint:recommended`,
    plugins: [
        `@stylistic/js`
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                `.eslintrc.{js,cjs}`
            ],
            'parserOptions': {
                'sourceType': `script`
            }
        }
    ],
    'parserOptions': {
        'ecmaVersion': `latest`,
        'sourceType': `module`
    },
    'rules': {
        'indent': [
            `error`,
            4
        ],
        'linebreak-style': [
            `error`,
            `unix`
        ],
        'quotes': [
            `error`,
            `backtick`
        ],
        'semi': [
            `error`,
            `always`
        ],
        'multiline-ternary': [
            `error`,
            `always-multiline`
        ],
        'no-multi-spaces': [
            `error`
        ],
        'function-paren-newline': [
            `error`,
            {
                'minItems': 3
            }
        ]
    }
};
