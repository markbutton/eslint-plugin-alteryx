# Make sure the tool contains the config.xml file (contains-config)

This rule is important to check the structure of your tool.  Make sure to include the config.xml in every tool.


## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js

<MetaInfo>
  <Name>test</Name>
  <Description>test</Description>
  <ToolVersion>4</ToolVersion>
  <CategoryName>Connectors</CategoryName>
  <Author>Alteryx Products</Author>
  <Icon>SalesforceInputIcon.png</Icon>
</MetaInfo>

```

Examples of **correct** code for this rule:

```js

<MetaInfo></MetaInfo>

```


## When Not To Use It

This rule must remain on at all times
