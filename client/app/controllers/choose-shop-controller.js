function ChooseShopCtrl (Preferences, $state, DataService, Entities, initialLoaderManager) {
  this.loader = initialLoaderManager.makeLoader((isRetry) => (
    DataService.shops.getList()
    .then(shops => {
      this.shops = shops;
      // When the user has no shop choosed and has only one shop
      // skip this page and go directly to home page
      if (this.shops.length === 1 && !Preferences.getCurrentShopId()) {
        this.setCurrentShop(this.shops[0]);
      }
    })
  ));

  this.setCurrentShop = (shop) => {
    Preferences.setCurrentShopId(shop.id);
    Entities.setCurrentShop(shop);
    $state.go('app.home');
  };
}

export default ChooseShopCtrl;
