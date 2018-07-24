# Passwords must be hidden from view (no-visible-password)

All password fields should hide the user input from view.


## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js

<ayx aria-label="password-textbox" 
  data-ui-props='{type:"TextBox", widgetId:"password"}' 
  data-item-props='{dataName:"password", dataType:"SimpleString"}'>
</ayx>

```

Examples of **correct** code for this rule:

```js

<ayx aria-label="password-textbox" 
  data-ui-props='{type:"TextBox", widgetId:"password"}' 
  data-item-props='{dataName:"password", dataType:"SimpleString", password:true, encryptionMode:"machine"}'>
</ayx>

```


## When Not To Use It

This rule must be used at all times.

