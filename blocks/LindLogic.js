var listCondXJSON ={
  "message0": 'check for %1',
  "args0": [
    {
      "type": "field_dropdown",
      "name": "check",
      "options": [
        [ "metres of object from Lindsey", "metres" ],
        [ "number of objects", "number" ]
      ]
    }
  ],
  "message1": '%1 %2 %3',
  "args1": [
    {
      "type": "field_dropdown",
      "name": "target",
      "options": [
        [ "person", "person" ],
        [ "exhibits", "exhibits" ],
      ]
    },
    {
      "type": "field_dropdown",
      "name": "comparitor",
      "options": [
        [ "less than", "<" ],
        [ "greater than", ">" ]
      ]
    },
    {
      "type": "field_number",
      "name": "limit",
    }
  ],
  "output": "String",
  "style":"procedure_blocks",
  "tooltip": "choose your conditions"
};

var lindIfJSON ={
    "type": "controls_if",
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

Blockly.Blocks['listCond'] = {
  init: function() {
    this.jsonInit(listCondXJSON);
  }
};
