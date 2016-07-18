function AppCtrl ($scope, DataService, $auth, $rootScope, Entities, Preferences, HttpUtils) {
  console.info('AppController.');

  this.logged = () => $auth.isAuthenticated();

  $rootScope.entitiesBootstrapError = null;

  $rootScope.$on('Entities:shopChanged', (evt, shop) => {
    this.shop = shop;
  })

  $rootScope.$on('Entities:userChanged', (evt, user) => {
    console.info(user)
    this.user = user;
  })

  $rootScope.$on('Entities:loadUserError', (evt, error) => {
    $rootScope.entitiesBootstrapError = HttpUtils.makeErrorMessage(error);
  });

  $rootScope.$on('Entities:loadShopError', (evt, error) => {
    $rootScope.entitiesBootstrapError = HttpUtils.makeErrorMessage(error);
  });

  $rootScope.$on('Entities:invalidShop', (evt, error) => {
    Preferences.clearPreferences();
  });

  $rootScope.$on('unauthorized', (evt, error) => {
    $auth.logout();
    Preferences.clearPreferences();
  });

  $rootScope.$on('Entities:bootstrapStart', (evt) => {
    $rootScope.entitiesBootstrapError = null;
  });

  this.retryBootstrap = () => Entities.bootstrap();

  this.logout = () => {
    $auth.logout();
    Preferences.clearPreferences();
    $rootScope.$broadcast("app:logoutSuccess");
  };

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    console.info("state change start")
  });
}

export default AppCtrl;
