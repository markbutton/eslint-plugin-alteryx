/**
 * @fileoverview Await statement must contain a catch
 * @author Mark Button
 */
"use strict";

/**
 * Check whether it should stop traversing ancestors at the given node.
 * @param {ASTNode} node A node to check.
 * @returns {boolean} `true` if it should stop traversing.
 */
function isBoundary(node) {
    const t = node.type;

    return (
        (t === "FunctionDeclaration" ||
        t === "FunctionExpression" ||
        t === "ArrowFunctionExpression" && node.await === true)
    );
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "await statement must contain a catch",
            category: "Tool Functionality",
            recommended: true
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ],
        messages: {
            unexpectedAwait: "`await` expects a catch."
        }
    },

    create: function(context) {

        /**
         * Validate an await expression.
         * @param {ASTNode} awaitNode An AwaitExpression to validate.
         * @returns {void}
         */
        function validate(awaitNode) {
            if (!awaitNode.await) {
                return;
            }

            let node = awaitNode;

            // does await node contain catch
            if (node && !node.catch) {
                context.report({
                    node: awaitNode,
                    messageId: "unexpectedAwait"
                });
            }
        }

        return {
            AwaitExpression: validate
        };
    }
};
