/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var watchID = 0;

var acceleration = {
	// Application Constructor
	initialize: function () {
		document.getElementById('btn').addEventListener('click', this.startAcceleration, false);
	},
	
	startAcceleration: function () {
		var options = { frequency: 100 };
		navigator.accelerometer.watchAcceleration(acceleration.onSuccess, acceleration.onError, options);
	},
	
	onSuccess: function (coordenadas) {
		document.getElementById('accx').setAttribute('value', coordenadas.x);
		document.getElementById('accy').setAttribute('value', coordenadas.y);
		document.getElementById('accz').setAttribute('value', coordenadas.z);
	},
	
	onError: function(error){
		alert(error.code);
	}

};