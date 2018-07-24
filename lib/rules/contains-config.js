/**
 * @fileoverview Make sure the tool contains the config.xml file
 * @author Mark Button
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Make sure the tool contains the config.xml file",
            category: "Tool Structure",
            recommended: true
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        const ERROR_MSG_NO_CONFIG = 'All projects must contain a properly formatted Config.xml';
        let hasMetaData = false;
        let hasChildren = false;

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            JSXOpeningElement: function(node) {
                const nodeType = node.name.name;
                const children = node.parent.children;

                if (nodeType === 'MetaInfo') {
                    this.hasMetaData = true;
                }

                if (this.hasMetaData) {
                     if (children.length > 0) {
                        this.hasChildren = true;
                    } else {
                        this.hasChildren = false;
                    }    
                }

                if (this.hasMetaData && !this.hasChildren) {
                    context.report({
                        node: node,
                        message: ERROR_MSG_NO_CONFIG,
                    })
                }
            }

        };
    }
};
