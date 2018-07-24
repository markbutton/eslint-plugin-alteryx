/**
 * @fileoverview Passwords must be hidden from view
 * @author Mark Button
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-visible-password");

const RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  }
});


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-visible-password", rule, {

  valid: [
    {
      code: "<ayx aria-label='password-textbox' data-ui-props='{type:\"TextBox\", widgetId:\"password\"}' data-item-props='{dataName:\"password\", dataType:\"SimpleString\", password:true, encryptionMode:\"machine\"}'></ayx>",
    }
  ],

  invalid: [
    {
      code: "<ayx aria-label='password-textbox' data-ui-props='{type:\"TextBox\", widgetId:\"password\"}' data-item-props='{dataName:\"password\", dataType:\"SimpleString\"}'></ayx>",
      errors: [{
        message: "Password field must be type password.",
        type: "JSXOpeningElement"
      }]
    }
  ]
});
