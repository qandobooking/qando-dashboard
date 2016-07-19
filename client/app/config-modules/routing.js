import angular from 'angular';
import uiRouter from 'angular-ui-router';
import satellizer from 'satellizer';

angular.module('app.routing', [ uiRouter, satellizer ])

.run(function($rootScope, $state, Preferences, $auth) {
  // Go to login after logout
  $rootScope.$on("app:logoutSuccess", () => {
    $state.go("login");
  });

  // Go to home after login
  $rootScope.$on("app:loginSuccess", () => {
    $state.go("app.home")
  });

  // When the current shop loaded is invalid go back to choose shop page
  $rootScope.$on("Entities:invalidShop", () => {
    $state.go("choose-shop");
  });

  // When unauthorized back to login page
  $rootScope.$on("unauthorized", () => {
    $state.go("login");
  });

  // State permissions...
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams, options) {
    if (toState.data) {
      // When state requires auth and user inst't authenticated
      // back to login page
      if (toState.data.auth && !$auth.isAuthenticated()) {
        event.preventDefault();
        $state.go("login");
        return;
      }

      // When state requires an user guest and user is authenticated
      // back to home
      if (toState.data.guest && $auth.isAuthenticated()){
        event.preventDefault();
        $state.go("app.home");
        return;
      }

      // When state requires a valid shop choosed and ther is no shop
      // in preferences go to choose shop page
      if (toState.data.requiresShop && !Preferences.getCurrentShopId()) {
        event.preventDefault();
        $state.go("choose-shop");
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

  .state('choose-shop', {
    url: '/choose-shop',
    template: require('../templates/choose-shop.html'),
    controller: 'ChooseShopCtrl as ChooseShopCtrl',
    data: {
      auth: true
    }
  })

  .state('app', {
    url: '/app',
    abstract: true,
    template: require('../templates/app.html'),
    data: {
      auth: true,
      requiresShop: true
    }
  })

  .state('app.home', {
    url: '/home',
    template: require('../templates/home.html')
  })


  $urlRouterProvider.otherwise(function ($injector) {
    var $state = $injector.get('$state');
    $state.go('app.home');
  });

});
