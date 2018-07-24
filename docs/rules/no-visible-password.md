# Passwords must be hidden from view (no-visible-password)

All password fields should hide the user input from view.


## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js

<ayx aria-label="password-textbox" data-ui-props='{type:"TextBox", widgetId:"password"}' data-item-props='{dataName:"password", dataType:"SimpleString"}'></ayx>

```

Examples of **correct** code for this rule:

```js

<ayx aria-label="password-textbox" data-ui-props='{type:"TextBox", widgetId:"password"}' data-item-props='{dataName:"password", dataType:"SimpleString", password:true, encryptionMode:"machine"}'></ayx>

```

### Options

If there are any options, describe them here. Otherwise, delete this section.

## When Not To Use It

Give a short description of when it would be appropriate to turn off this rule.

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.
