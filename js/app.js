
(function () {
	"use strict";

	var app = angular.module('app', []);
	app.value('settings', {
		env: 'production',
		devUrl: 'http://localhost:3002/api/user',
		prodUrl: 'http://desolate-reef-8955.herokuapp.com/heroku1-be/user'
	})

	app.controller('bodyCtrl', function ($scope, $http, settings) {
		var url = settings.env == 'production'? settings.prodUrl: settings.devUrl;
		console.log('getting data from:', url)
		$http.get(url)
			.then(function(resp) {
				$scope.items = resp.data;
			})
	})


})()
