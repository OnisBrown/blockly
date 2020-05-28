Blockly.JavaScript['waitPerson'] = function(block) {
  //GoTo a location
  var dist = block.getFieldValue('distance');
  var simBool = block.getFieldValue('simulator').toLowerCase();
  var code = "await waitPersonCode(" + dist + ","+ simBool +");\n";
  return code;
};


async function waitPersonCode(dist, simBool)
{
	let result = await Picker(["waitPer", dist, simBool]);
  console.log(result);
}

Blockly.JavaScript['pause'] = function(block) {
  //GoTo a location
  var seconds = block.getFieldValue('time');
  var code = "await waitTimeCode(" + seconds +");\n";
  return code;
};

async function waitTimeCode(pause)
{
	let result = await Picker(["waitTime", pause]);
  console.log(result);
}

Blockly.JavaScript['NearestPerDist'] = function(block){
  var simBool = block.getFieldValue('simulator').toLowerCase();
  console.log(simBool)
  if(simBool=="true"){
    var code = 'await PerPos(0, false)';
  }
  else{
    var code = 'await personSense(0, false)';
  }
  return [code, Blockly.JavaScript.ORDER_ATOMIC]
}

Blockly.JavaScript['NearestPerPos'] = function(block){
  var simBool = block.getFieldValue('simulator').toLowerCase();
  console.log(simBool)
  if(simBool=="true"){
    var code = 'await PerPos(0, false, true)';
  }
  else{
    var code = 'await PerPos(0, false, true, false)';
  }
  return [code, Blockly.JavaScript.ORDER_ATOMIC]
}

Blockly.JavaScript['NearestExhDist'] = function(block){
  var simBool = block.getFieldValue('simulator').toLowerCase();
  console.log(simBool)
  if(simBool=="true"){
    var code = 'await exhibitDist(0, false)';
  }
  else{
    var code = 'await exhibitDist(0, false)';
  }
  return [code, Blockly.JavaScript.ORDER_ATOMIC]
}

Blockly.JavaScript['start'] = function(block){
  var code = '';
  return code;
}
