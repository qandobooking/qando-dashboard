function ChooseShopCtrl (Preferences, $state, DataService, Entities, initialLoaderManager) {
  this.loader = initialLoaderManager.makeLoader((isRetry) => (
    DataService.shops.getList()
    .then(shops => {
      this.shops = shops;
    })
  ));

  this.setCurrentShop = (shop) => {
    Preferences.setCurrentShopId(shop.id);
    Entities.setCurrentShop(shop);
    $state.go('app.home');
  };
}

export default ChooseShopCtrl;
