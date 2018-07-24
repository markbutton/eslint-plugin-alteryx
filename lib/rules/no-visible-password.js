/**
 * @fileoverview Passwords must be hidden from view
 * @author Mark Button
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Passwords must be hidden from view",
      category: "Tool Functionality",
      recommended: true
    },
    fixable: null,  // or "code" or "whitespace"
    schema: [{
      type: 'object',
      properties: {
        ignoreTranspilerName: {
          type: 'boolean'
        }
      },
      additionalProperties: false
    }]
  },

  create: function (context) {
    const ERROR_MSG_NO_PASSWORD = 'Password field must be type password.';

    function looseJsonParse(obj){
      return Function('"use strict";return (' + obj + ')')();
  }

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {

      JSXOpeningElement: function (node) {
        const nodeType = node.name.name;
        let hasPasswordName = false;
        let hasPasswordType = false;
        let attrName = '';
        let attrValue = new Object();

        if (nodeType !== 'ayx') {
          return;
        }

        // Check password fields are type password
        const passwordField = node.attributes.filter((attr) => {
          attrName = attr.name.name;

          if (attrName === 'data-ui-props') { 
            attrValue = looseJsonParse(attr.value.value);
            if (attrValue.widgetId === 'password') {
              hasPasswordName = true;
            } else {
              hasPasswordName = false;
            }
          }
          
          if (attrName === 'data-item-props') {
            attrValue = looseJsonParse(attr.value.value);
            if (attrValue.password === true) {
              hasPasswordType = true;
            } else {
              hasPasswordType = false;
            }
          }
        });

        if (hasPasswordName && !hasPasswordType) {
          context.report({
            node: node,
            message: ERROR_MSG_NO_PASSWORD,
          })
        }
      }

    };
  }
};
