/**
 * @fileoverview Await statement must contain a catch
 * @author Mark Button
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-catch-in-await");

const RuleTester = require("eslint").RuleTester;
const axios = require("axios");

RuleTester.setDefaultConfig({
    parserOptions: {
      ecmaVersion: 6,
      ecmaFeatures: {
        jsx: true,
        module: true,
      },
    }
  });


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-catch-in-await", rule, {

    valid: [
        {
            code: "function doSomething() { await axios.post(url, data).then(processResponse).then(Messaging.clearMsg).catch(Messaging.throwError) }",
            globals: [ "axios" ]
        }
            
    ],

    invalid: [
        {
            code: "await axios.post(url, data).then(processResponse).then(Messaging.clearMsg)",
            errors: [{
                message: "`await` expects a catch.",
                type: "AwaitExpression"
            }]
        }
    ]
});
