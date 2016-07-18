import angular from 'angular';
import uiRouter from 'angular-ui-router';
import satellizer from 'satellizer';

angular.module('app.routing', [ uiRouter, satellizer ])

.run(function($rootScope, $state, Preferences, $auth) {

  // Go to login after logout
  $rootScope.$on("app:logoutSuccess", () => {
    $state.go("app.login");
  });

  // Go to home after login
  $rootScope.$on("app:loginSuccess", () => {
      $state.go("app.logged.home")
  });

  // When the current shop loaded is invalid go back to choose shop page
  $rootScope.$on("Entities:invalidShop", () => {
    $state.go("app.logged.choose-shop");
  });

  // When unauthorized back to login page
  $rootScope.$on("unauthorized", () => {
    $state.go("app.login");
  });

  // State permissions...
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams, options) {
    if (toState.data) {

      // When state requires auth and user inst't authenticated
      // back to login page
      if (toState.data.auth && !$auth.isAuthenticated()) {
        event.preventDefault();
        $state.go("app.login");
        return;
      }

      // When state requires an user guest and user is authenticated
      // back to home
      if (toState.data.guest && $auth.isAuthenticated()){
        event.preventDefault();
        $state.go("app.logged.home");
        return;
      }

      // When state requires a valid shop choosed and ther is no shop
      // in preferences go to choose shop page
      if (toState.data.requiresShop && !Preferences.getCurrentShopId()) {
        event.preventDefault();
        $state.go("app.logged.choose-shop");
        return;
      }
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('login', {
    url: '/login',
    template: require('../templates/login.html'),
    controller: 'LoginCtrl as LoginCtrl',
    data: {
      guest : true
    }
  })

  //.state('app', {
    //url: '/',
    //abstract: true,
    //templateUrl: 'templates/menu.html',
    //data : {
      //auth : true
    //}
  //})

});
