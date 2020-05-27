Blockly.JavaScript['lindFor'] = function(block) {
  //GoTo a location
  var iterations = block.getFieldValue('iterations');
  var forDo = Blockly.JavaScript.statementToCode(block, 'DO');
  innerCode = "\t" + forDo.replace("\n", "\n \t");
  var code = `for(i = 0; i < ${iterations}; i++) {\n  ${innerCode}}\n`;
  return code;
};

Blockly.JavaScript['lindWhile'] = function(block) {
  //GoTo a location
  var target = Blockly.JavaScript.valueToCode(block,'target', Blockly.JavaScript.ORDER_ATOMIC)|| true;
  var forDo = Blockly.JavaScript.statementToCode(block, 'DO');
  innerCode = "\t" + forDo.replace("\n", "\n \t");
  var code = `while(${target}){\n ${innerCode}}\n`;
  return code;
};
