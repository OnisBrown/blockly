var forXJSON ={
  "message0": 'for %1 time(s)',
  "args0": [
    {
      "type": "field_number",
      "name": "iterations",
      "min": 1,
      "max": 10
    }
  ],
  "message1": "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
  "args1": [{
    "type": "input_statement",
    "name": "DO"
  }],
  "nextStatement": null,
  "previousStatement": null,
  "colour": "#00008b",
  "tooltip": "For x iterations do:"
};

Blockly.Blocks['lindFor'] = {
  init: function() {
    this.jsonInit(forXJSON);
  }
};

var whileXJSON ={
  "message0": 'while %1',
  "args0": [
    {
      "type": "input_value",
      "name": "target",
      "check":"logic"
    },
  ],
  "message1": "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
  "args1": [{
    "type": "input_statement",
    "name": "DO"
  }],
  "inputsInline": true,
  "nextStatement": null,
  "previousStatement": null,
  "colour": "#00008b",
  "tooltip": "while condition is true do:"
};

Blockly.Blocks['lindWhile'] = {
  init: function() {
    this.jsonInit(whileXJSON);
  }
};
