var listCondXJSON ={
  "message0": '%1 %2 %3',
  "args0": [
    {
      "type": "input_value",
      "name": "check",
    },
    {
      "type": "field_dropdown",
      "name": "comparitor",
      "options": [
        [ "<", "<" ],
        [ ">", ">" ],
        ["≤","<="],
        ["≥",">="],
        ["≠","!="],
        ["=","=="]
      ]
    },
    {
      "type": "input_value",
      "name": "limit",
    }
  ],
  "inputsInline": true,
  "output": "String",
  "style":"procedure_blocks",
  "tooltip": "choose your conditions"
};

Blockly.Blocks['listCond'] = {
  init: function() {
    this.jsonInit(listCondXJSON);
  }
};

var lindIfJSON ={
    "message0": "%{BKY_CONTROLS_IF_MSG_IF} %1",
    "args0": [
      {
        "type": "input_value",
        "name": "IF0",
      }
    ],
    "message1": "%{BKY_CONTROLS_IF_MSG_THEN} %1",
    "args1": [
      {
        "type": "input_statement",
        "name": "DO0"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "style": "logic_blocks",
    "helpUrl": "%{BKY_CONTROLS_IF_HELPURL}",
    "mutator": "controls_if_mutator",
    "extensions": ["controls_if_tooltip"]
}

Blockly.Blocks['lindIf'] = {
  init: function() {
    this.jsonInit(lindIfJSON);
  }
};
