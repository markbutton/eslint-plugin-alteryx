/**
 * @fileoverview Make sure the tool contains the config.xml file
 * @author Mark Button
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/contains-config");

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

const ruleTester = new RuleTester();
ruleTester.run("contains-config", rule, {

  valid: [
    // give me some code that won't trigger a warning
    {
      code: "<MetaInfo><Name>test</Name><Description>test</Description><ToolVersion>4</ToolVersion><CategoryName>Connectors</CategoryName><Author>Alteryx Products</Author><Icon>SalesforceInputIcon.png</Icon></MetaInfo>",
    }
  ],

  invalid: [
    {
      code: "<MetaInfo></MetaInfo>",
      errors: [{
        message: "All projects must contain a properly formatted Config.xml",
        type: "JSXOpeningElement"
      }]
    }
  ]
});
