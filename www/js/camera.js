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
var camera = {

	getPhoto: function () {
		var pictureOptions = {
			quality: 75,
			destinationType: Camera.DestinationType.DATA_URL,
			sourceType: Camera.PictureSourceType.CAMERA,
			allowEdit: true,
			encodingType: Camera.EncodingType.JPEG,
			popoverOptions: CameraPopoverOptions,
			saveToPhotoAlbum: false
		};

		navigator.camera.getPicture(camera.onSuccess, camera.onFail, pictureOptions);
	},

	photoLibrary: function () {
		var sourceOptions = {
			destinationType: Camera.DestinationType.DATA_URL,
			sourceType: Camera.PictureSourceType.PHOTOLIBRARY
		};

		navigator.camera.getPicture(camera.onSuccess, camera.onFail, sourceOptions);

	},

	onSuccess: function (imageData) {
		var image = document.getElementById('image');
		image.src = "data:image/jpeg;base64," + imageData;
	},

	onFail: function (message) {
		alert(message);
	}

};