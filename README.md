# eslint-plugin-alteryx

A plugin for custom alteryx rules.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-alteryx`:

```
$ npm install eslint-plugin-alteryx --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-alteryx` globally.

## Usage

Add `alteryx` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "alteryx"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "alteryx/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





