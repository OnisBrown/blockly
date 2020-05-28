scriptJSON = {
  "message0": 'Write paragraph here: %1',
  "args0": [
    {
      "type": "field_multilinetext",
      "name": "script",
      "TEXT_DEFAULT_HEIGHT": '20px'
    }
  ],
  "output": "String",
  "colour": 160,
  "tooltip": "Pick a location from the drop down menu"
};

Blockly.Blocks['script'] = {
  init: function() {
    this.jsonInit(scriptJSON);
  }
};

giveSpeechJSON = {
  "message0": 'say %1',
  "args0": [
    {
      "type": "input_value",
      "name":"script",
      "check":"String"
    }
  ],
  "message1": 'behaviour toggles: gaze %1 pivoting %2',
  "args1": [
    {
      "type": "field_checkbox",
      "name":"gaze",
      "checked": true
    },
    {
      "type": "field_checkbox",
      "name":"pivot",
      "checked": true
    }
  ],
  "nextStatement": null,
  "previousStatement": null,
  "colour": 160,
  "tooltip": "Insert a scrypt"
};

Blockly.Blocks['giveSpeech'] = {
  init: function() {
    this.jsonInit(giveSpeechJSON);
  }
};

describeJSON = {
  "message0": 'Give a standard talk on %1',
  "args0": [
    {
      "type": "input_value",
      "name": "exhibit",
      "check": "String"
    },
  ],
  "message1": 'behaviour toggles: gaze %1 pivoting %2',
  "args1": [
    {
      "type": "field_checkbox",
      "name":"gaze",
      "checked": true
    },
    {
      "type": "field_checkbox",
      "name":"pivot",
      "checked": true
    }
  ],
  "nextStatement": null,
  "previousStatement": null,
  "style":"procedure_blocks",
  "tooltip": "Insert an exhibitLs Block to get the premade talk on that exhibit"
};

Blockly.Blocks['describe'] = {
  init: function() {
    this.jsonInit(describeJSON);
  }
};

askYNQuestionJSON = {
  "message0": 'Ask a question %1',
  "args0": [
    {
      "type": "field_input",
      "name": "question",
      "check": "String"
    }
  ],
  "nextStatement": null,
  "previousStatement": null,
  "colour": 160,
  "tooltip": "type a question to ask"
};

Blockly.Blocks['askYNQuestion'] = {
  init: function() {
    this.jsonInit(askYNQuestionJSON);
  }
};

var askStrQuestionJSON ={
  "message0": 'Say: %1. and return the response',
  "args0": [
    {
      "type": "field_input",
      "name": "prompt",
      "check":"String"
    }
  ],
  "message1": '(No working microphone? %1)',
  "args1": [
    {
      "type": "field_checkbox",
      "name":"simulator",
      "checked": true
    },
  ],
  "output":"string"
  "nextStatement": null,
  "previousStatement": null,
  "style":"procedure_blocks",
  "tooltip": "allows you to ask the robot to do something via spoken word or text input"
};

Blockly.Blocks['askResQuestion'] = {
  init: function() {
    this.jsonInit(askResQuestionJSON);
  }
};

var askOQuestionJSON ={
  "message0": 'Say: %1 and wait for a command',
  "args0": [
    {
      "type": "field_input",
      "name": "prompt",
      "check":"String"
    }
  ],
  "message1": '(No working microphone? %1)',
  "args1": [
    {
      "type": "field_checkbox",
      "name":"simulator",
      "checked": true
    },
  ],
  "nextStatement": null,
  "previousStatement": null,
  "style":"procedure_blocks",
  "tooltip": "allows you to ask the robot to do something via spoken word or text input"
};

Blockly.Blocks['askOQuestion'] = {
  init: function() {
    this.jsonInit(askOQuestionJSON);
  }
};
