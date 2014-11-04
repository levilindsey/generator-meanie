(function () {
  angular.module('userService', [])

    .constant('someUserUrl', '/some-user-url')

    .factory('User', User);

  function User($http, someUserUrl) {
    var User;

    User = {
      getData: getData
    };

    // ---  --- //

    function getData(parameters) {
      return $http.get(someUserUrl + '/')
        .then(function (response) {
          return JSON.parse(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }

    return User;
  }
})();
