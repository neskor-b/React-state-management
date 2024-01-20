module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "no-undef": "error",
        "no-debugger": "error",
        "no-dupe-args": "error",
        "no-duplicate-imports": "error",
        "no-unreachable": "error",
        "no-empty-pattern": "error",
        "no-import-assign": "error",
        "no-loss-of-precision": "error",
        "no-new-symbol": "error",
        "no-obj-calls": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-template-curly-in-string": "error",
        "no-unexpected-multiline": "error",
        "no-unsafe-optional-chaining": "error",
        "eqeqeq": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-const-assign": "error",
        "constructor-super": "error",
        "no-class-assign": "error",
        "no-constant-condition": "error",
        "no-constructor-return": "error",
        "no-dupe-else-if": "error",
        "no-duplicate-case": "error",
        "no-empty-character-class": "error",
        "no-ex-assign": "error",
        "no-fallthrough": "error",
        "no-func-assign": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-sparse-arrays": "error",
        "no-restricted-globals": ["error", "event", "fdescribe"],
        "react/jsx-props-no-spreading": "off",
        "react/jsx-one-expression-per-line": "off",
        "react/function-component-definition": "off",
        "react/no-multi-comp": "off",
        "react/no-danger": "warn",
        "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
        "react/jsx-max-props-per-line": ["error", { "maximum": { "single": 2, "multi": 1 } }],
        "react/jsx-filename-extension": "off",
        "react/jsx-closing-tag-location": "off",
        "react/require-default-props": "off",
        "object-curly-newline": "off",
        "function-paren-newline": "off",
        "max-statements-per-line": ["error", { "max": 2 }],
        "dot-location": ["error", "property"],
        "function-call-argument-newline": ["error", "consistent"],
        "prefer-stateless-function": "off",
        "import/prefer-default-export": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "max-len": [
            "warn",
            {
                "code": 300
            }
        ],
        "import/extensions": ["off", "never"],
        "no-extra-boolean-cast": "warn",
        "jsx-a11y/click-events-have-key-events": "off",
        "comma-dangle": "error",
        "camelcase": "off",
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "no-console": "off",
        "no-alert": "warn",
        "consistent-return": "warn",
        "no-bitwise": [
            "error",
            {
                "allow": ["~"]
            }
        ],
        "no-nested-ternary": "off",
        "no-useless-escape": "warn",
        "no-underscore-dangle": "warn",
        "no-unused-expressions": [
            "error",
            {
                "allowShortCircuit": true,
                "allowTernary": true
            }
        ],
        "no-use-before-define": [
            "error",
            {
                "functions": false,
                "classes": true
            }
        ],
        "no-multi-spaces": [
            "error",
            {
                "exceptions": {
                    "ImportDeclaration": true
                }
            }
        ],
        "jsx-a11y/anchor-is-valid": "off",
        "arrow-parens": ["error", "as-needed"],
        "no-plusplus": "off"
    }
}
