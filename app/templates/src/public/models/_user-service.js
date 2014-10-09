angular.module('userService', [])

    .constant('someUserUrl', '/some-user-url')

    .factory('User', function($http, someUserUrl) {
      var User;

      User = {
        getData: function (parameters) {
          return $http.get(someUserUrl + '/')
              .then(function (response) {
                return JSON.parse(response.data);
              })
              .catch(function (error) {
                console.error(error);
              });
        }
      };

      return User;
    });
