Blockly.JavaScript['script'] = function(block) {
  var paragraph = block.getFieldValue('script');
  var code = paragraph;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['scriptShort'] = function(block) {
  var paragraph = block.getFieldValue('script');
  var code = paragraph;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['giveSpeech'] = function(block) {
  var paragraph = Blockly.JavaScript.valueToCode(block,'script', Blockly.JavaScript.ORDER_ATOMIC) || "no text";
  var behaviours = [block.getFieldValue('gaze').toLowerCase(), block.getFieldValue('pivot').toLowerCase()];
  var code = `await giveSpeechCode(\`${paragraph}\`, ${behaviours[0]}, ${behaviours[1]});\n`;
  return code;
};

async function giveSpeechCode(paragraph, behaviours1, behaviours2){
  let result = await Picker(['speech', paragraph, [behaviours1,behaviours2]]);
  console.log(result);
}

Blockly.JavaScript['describe'] = function(block){ // describe an exhibit
  var choice = Blockly.JavaScript.valueToCode(block,'exhibit', Blockly.JavaScript.ORDER_ATOMIC) || "failing to get exhibit name";
  var behaviours = [block.getFieldValue('gaze').toLowerCase(), block.getFieldValue('pivot').toLowerCase()];
  var code = `await descCode(\`${choice}\`, ${behaviours[0]}, ${behaviours[1]});\n`;
  return code;
};

async function descCode(choice, behaviours1, behaviours2){
  let result = await Picker(['desc', choice, [behaviours1,behaviours2]]);
  console.log(result);
}

Blockly.JavaScript['askOQuestion'] = function(block) {
  //GoTo a location
  var prompt = block.getFieldValue('prompt');
  var simBool = block.getFieldValue('simulator').toLowerCase();
  var code = `await askOCode(\`${prompt}\`, ${simBool});\n`;
  return code;
};

async function askOCode(prompt, simBool)
{
  console.log(prompt)
	let result = await Picker(["askO", (prompt), (simBool)]);
  console.log(JSON.stringify(result));
}

Blockly.JavaScript['askResQuestion'] = function(block) {
  //GoTo a location
  var prompt = block.getFieldValue('prompt');
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
  var simBool = block.getFieldValue('simulator').toLowerCase();
  var code = `${varName} = await askResCode(\`${prompt}\`, ${simBool});\n`;
  return code;
};

async function askResCode(prompt, simBool)
{
  rwcActionSay(prompt).on("result", (status)=>{
       if(simBool){
         var  tmp = prompt(prompt);
       }
       else{
         rwcListenerGetDialogue().then(function(script){
          var  tmp = script;
         });
       }
  });
}

Blockly.JavaScript['askYNQuestion'] = function(block) {
  var question = block.getFieldValue('question') || "failed to parse speech";
  var code = `await askYNQuestionCode(\`${question}\`);\n`;
  return code;
};

async function askYNQuestionCode(question){
	let result = await Picker(['YNQ&A', question]);
  console.log(result);
}
