(function () {
  angular.module('<%= appPrefix %>DataNameService', [])

    .constant('someDataUrl', '/some-data-url')

    .factory('DataName', DataName);

  function DataName($http, someDataUrl) {
    var DataName;

    DataName = {
      getData: getData
    };

    // ---  --- //

    function getData(parameters) {
      return $http.get(someDataUrl + '/')
        .then(function (response) {
          return JSON.parse(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }

    return DataName;
  }
})();
