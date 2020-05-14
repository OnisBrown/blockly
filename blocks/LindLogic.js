var listCondXJSON ={
  "message0": '%1 is %2  %3 %4',
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
        ["≠","=="],
      ]
    },
    {
      "type": "input_value",
      "name": "limit",
    },
    {
      "type": "dummy_input"
    }
  ],
  "output": "String",
  "style":"procedure_blocks",
  "tooltip": "choose your conditions"
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

Blockly.Blocks['listCond'] = {
  init: function() {
    this.jsonInit(listCondXJSON);
  }
};
