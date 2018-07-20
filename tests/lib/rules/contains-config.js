/**
 * @fileoverview Make sure the tool contains the config.xml file
 * @author Mark Button
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/contains-config"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("contains-config", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "config.xml",
            errors: [{
                message: "You must have a config.xml in your project.",
                type: "Tool Structure"
            }]
        }
    ]
});
