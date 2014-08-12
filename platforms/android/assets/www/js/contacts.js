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
var app = {
    // Application Constructor
    initialize: function () {
        'use strict';
        this.bindEvents();
    },
    // Bind Event Listeners
    bindEvents: function () {
        'use strict';
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function () {
        'use strict';
        app.getAllContacts();
    },

    getAllContacts: function () {
        'use strict';
        var options, fields;

        options = new ContactFindOptions();
        options.filter = "";
        options.multiple = true;

        fields = [
            "name",
            "phoneNumbers",
            "birthday",
            "emails"
        ];
        navigator.contacts.find(fields, app.onAllSuccess, app.onError, options);
    },

    onAllSuccess: function (contacts) {
        if (contacts.length) {
            var arrContactDetails = new Array();
            for (var i = 0; i < contacts.length; ++i) {
                if (contacts[i].name) {
                    arrContactDetails.push(contacts[i]);
                }
            }
            arrContactDetails.sort(app.alphabeticalSort);
        } else {
            document.getElementById('contactList').append('<li><h3>Sorry, no contacts were found</h3></li>');
        }
        document.getElementById('contactList').listview('refresh');
    },

    alphabeticalSort: function (a, b) {
        if (a.name.formatted < b.name.formatted) {
            return -1;
        } else if (a.name.formatted > b.name.formatted) {
            return 1;
        } else return 0;
    },

    onError: function (error) {
        console.log(error.code);
    }


};