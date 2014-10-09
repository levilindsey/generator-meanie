angular.module('dataNameService', [])

    .constant('someDataUrl', '/some-data-url')

    .factory('DataName', function($http, someDataUrl) {
      var DataName;

      DataName = {
        getData: function (parameters) {
          return $http.get(someDataUrl + '/')
              .then(function (response) {
                return JSON.parse(response.data);
              })
              .catch(function (error) {
                console.error(error);
              });
        }
      };

      return DataName;
    });
