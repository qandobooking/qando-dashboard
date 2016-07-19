function DirectLoginCtrl (Preferences, Entities, $state, $auth, $rootScope, DataService, $stateParams, initialLoaderManager) {
  const { token, shopId } = $stateParams;

  // No token give go back to login
  if (!token) {
    $state.go('login');
    return;
  }

  // Check token and redirect based on response
  DataService.me.get({}, {
    'Authorization': `JWT ${token}`
  })
  .then((response) => {
    // Got a valid token!
    $auth.setToken(token);

    if (shopId) {
      // Try to find shop by given id
      DataService.shops.one(shopId).get()
        .then((shop) => {
          // Set the shop
          Preferences.setCurrentShopId(shop.id);
          Entities.setCurrentShop(shop);
        })
        .finally(() => {
          $rootScope.$broadcast("app:loginSuccess", response);
        });
    } else {
      $rootScope.$broadcast("app:loginSuccess", response);
    }
  })
  .catch((error) => {
    // When 401 alredy go back to login...
    if (error.status !== 401) {
      $state.go('login');
    }
  });
}

export default DirectLoginCtrl;
