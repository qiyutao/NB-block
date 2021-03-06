// Do not edit this file; automatically generated by build.py.
'use strict';

/*

 Visual Blocks Editor

 Copyright 2012 Fred Lin.
 https://github.com/gasolin/BlocklyDuino

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

Blockly.Blocks['nb_register'] = {
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
        .appendField("NB模块注册")
    this.setPreviousStatement(false, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks['nb_fresh'] = {
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
        .appendField("NB模块刷新");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks['nb_upload'] = {
  init: function() {
    this.setColour(190);
    this.appendValueInput("NB_UPLOAD_OBJ", 'Number')
        .appendField("NB模块上传数据   对象")
        .setCheck('Number');
    this.appendValueInput("NB_UPLOAD_ATTR", 'Number')
        .appendField("属性")
        .setCheck('Number');
    this.appendValueInput("NB_UPLOAD_VALUE", 'Number')
        .appendField("值")
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Delay specific time');
  }
  
  };
  Blockly.Blocks['nb_add_obj'] = {
    init: function() {
      this.setColour(190);
      this.appendValueInput("NB_ADD_OBJ", 'Number')
          .appendField("NB模块添加对象")
          .setCheck('Number');
      
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('Delay specific time');
    }
  };

  Blockly.Blocks['nb_add_attr'] = {
    init: function() {
      this.setColour(190);
      this.appendValueInput("NB_ADD_ATTR_OBJ", 'Number')
          .appendField("NB模块添加属性   对象")
          .setCheck('Number');
      this.appendValueInput("NB_ADD_ATTR_ATTR", 'Number')
          .appendField("属性")
          .setCheck('Number');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('Delay specific time');
    }
  };

  Blockly.Blocks['nb_onenet_write'] = {
    init: function() {
      this.setColour(190);
      this.appendValueInput("nb_onenet_write_Data", 'Number')
          .appendField("ONENET下发数据获取")
          .setCheck('Number');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('Delay specific time');
    }
  };

  Blockly.Blocks['nb_onenet_read'] = {
    init: function() {
      this.setColour(190);
      this.appendValueInput("onenet_read_OBJ", 'Number')
          .appendField("ONENET读取数据   对象")
          .setCheck('Number');
      this.appendValueInput("onenet_read_ATTR", 'Number')
          .appendField("属性")
          .setCheck('Number');
      this.appendValueInput("onenet_read_VALUE", 'Number')
          .appendField("值")
          .setCheck('Number');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('Delay specific time');
    }
  };
