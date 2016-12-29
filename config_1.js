/*
 ThingPlug StarterKit for LoRa version 0.1
 
 Copyright �� 2016 IoT Tech. Lab of SK Telecom All rights reserved.

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

module.exports = {

  AppEUI : 'ThingPlug',                   		// Application EUI
  DevEUI : '1.2.481.1.100',								// Device EUI
  version : 'v1_0',                             	// Application�� version
  TPhost : 'onem2m.sktiot.com',      		// ThingPlug�� HOST Addresss
  TPport : '9000',                             		// ThingPlug�� HTTP PORT ��ȣ

  responseAddress : 'http://127.0.0.1',         // HTTP�������� ����̽� ��� ���� ����̽��� ������ �ּ� mga
  responsePORT : '5005',                        	// HTTP�������� ����̽���� ���� ����̽��� ������ �ּ��� ���� ��Ʈ

  userID : 'userID',                            	// MQTT�������� Broker ������ ���� ID, ���� ID ���
  mqttClientId : function(){						// MQTT�������� Broker ������ ���� client ID(ex : ThingPlugID_0001)
	  var POST_FIX = '0001';
	  return this.userID+'_'+POST_FIX;    	
  },

  nodeID : '1.2.481.1.100',         	// Device ������ ���� LTID, ����̽� ���� ID ���
  passCode : '1234',                          	// ThingPlug�� Device��� �� ����� Device�� ��й�ȣ
  uKey : 'testtest==',                	// Thingplug�α��� ��, `����������`�� �ִ� ����� ����Ű

  containerName:'container',                         	// starter kit���� �����ϰ� ����� container �̸� (��������)
  DevReset : 'DevReset',                        	// starter kit���� �����ϰ� ����� ���� ��� DevReset
  extDevMgmt : 'extDevMgmt',						// starter kit���� �����ϰ� ����� ���� ��� extDevMgmt
  
  UPDATE_CONTENT_INTERVAL : 1000,					//contentInstance �����ֱ�
  
  BASE_TEMP : 30,
  BASE_HUMID : 60,
  BASE_LUX : 80,
 
  delimiter : ',',									// contents ������															
 
  contents : function(){															// Device���� ThingPlug�� �����ϴ� ���� ������ (contentInstance�� Attribute <con>)
	var value_TEMP = (Math.floor(Math.random() * 5) + this.BASE_TEMP).toString();	// ������ �µ���
	var value_HUMID = (Math.floor(Math.random() * 5) + this.BASE_HUMID).toString();	// ������ ������
	var value_LUX = (Math.floor(Math.random() * 5) + this.BASE_LUX).toString();		// ������ ������

	return value_TEMP + this.delimiter + value_HUMID + this.delimiter + value_LUX;
  }
};