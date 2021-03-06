var waitPersonJSON ={
  "message0": 'wait for a person to get within %1 metres and then: ',
  "args0": [
    {
      "type": "field_number",
      "name": "distance",
      "min": 1,
      "max": 5
    }
  ],
  "message1": '(is this the simulator? %1)',
  "args1": [
    {
      "type": "field_checkbox",
      "name":"simulator",
      "checked": true
    },
  ],
  "nextStatement": null,
  "previousStatement": null,
  "colour": "#FF7E47",
  "tooltip": "waits for a person to get within distance before "
};

Blockly.Blocks['waitPerson'] = {
  init: function() {
    this.jsonInit(waitPersonJSON);
  }
};

var waitTimeJSON ={
  "message0": 'wait for %1 seconds and and then: ',
  "args0": [
    {
      "type": "field_number",
      "name": "time",
      "min": 0,
      "max": 300
    }
  ],
  "nextStatement": null,
  "previousStatement": null,
  "colour": "#FF7E47",
  "tooltip": "waits for an amount of seconds"
};

Blockly.Blocks['pause'] = {
  init: function() {
    this.jsonInit(waitTimeJSON);
  }
};

var nearestExhDistJSON={
  "message0":"%1 exhibit distance",
  "args0": [
    {
      "type":"input_value",
      "name":"exhibit",
      "check":"exhibit"
    }
  ],
  "message1": '(is this the simulator? %1)',
  "args1": [
    {
      "type": "field_checkbox",
      "name":"simulator",
      "checked": true
    }
  ],
  "output": "number",
  "style":"procedure_blocks",
  "tooltip": "returns the distance to the chosen exhibit"
}

Blockly.Blocks['NearestExhDist'] = {
  init: function(){
    this.jsonInit(nearestExhDistJSON);
  }
}

var nearestPersDistJSON={
  "message0":"The nearest person's distance in metres",
  "message1": '(is this the simulator? %1)',
  "args1": [
    {
      "type": "field_checkbox",
      "name":"simulator",
      "checked": true
    },
  ],
  "output": "number",
  "style":"procedure_blocks",
  "tooltip": "returns the distance to the nearest person"
}

Blockly.Blocks['NearestPerDist'] = {
  init: function(){
    this.jsonInit(nearestPersDistJSON);
  }
}

var nearestPersPosJSON={
  "message0":"The nearest person's position in the map",
  "message1": '(is this the simulator? %1)',
  "args1": [
    {
      "type": "field_checkbox",
      "name":"simulator",
      "checked": true
    },
  ],
  "style":"procedure_blocks",
  "tooltip": "returns the distance to the nearest person"
}

Blockly.Blocks['NearestPerPos'] = {
  init: function(){
    this.jsonInit(nearestPersPosJSON);
  }
}

var startJSON ={
  "message0": 'Attach Blocks here',
  "nextStatement": null,
  "Hat": true,
  "colour": "#4C7D4C",
  "tooltip": "start here"
}

Blockly.Blocks['start'] = {
  init: function(){
    this.jsonInit(startJSON);
  }
}
