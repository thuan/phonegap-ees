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
var mapLocation = {

	// Application Constructor
	initialize: function () {
		var positionOptions = {
			maximumAge: 3000, 
			timeout: 5000, 
			enableHighAccuracy: true 
		};
		navigator.geolocation.getCurrentPosition(mapLocation.onSuccess, mapLocation.onError, positionOptions);
	},

	onSuccess: function (position) {
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		mapLocation.showMap(latitude, longitude);
	},

	onError: function (error) {
		switch(error.code) {
			case error.PERMISSION_DENIED: alert("Ative o GPS do dispositivo");
				break;

			case error.POSITION_UNAVAILABLE: alert("Localizacao invalida, tente novamente");
				break;

			case error.TIMEOUT: alert("Timeout, feche alguns aplicativos e tente novamente");
				break;

			default: alert("Fail");
				break;
		}
	},

	showMap: function (latitude, longitude) {
		'use strict';
		var mapOptions = {
			center: new google.maps.LatLng(latitude, longitude),
			zoom: 16,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		
		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(latitude, longitude),
			map: map,
			title: "Sua Location!",
			animation: google.maps.Animation.DROP
		});

		return map;
	}
};