
function ChooseShopCtrl (Preferences, $state, DataService, Entities) {

  //this.loader = initialLoaderManager.makeLoader(() => (
    DataService.shops.getList()
    .then(shops => {
      this.shops = shops;
    })
  //));

  this.setCurrentShop = (shop) => {
    Preferences.setCurrentShopId(shop.id);
    Entities.setCurrentShop(shop);
    $state.go('app.home');
  };

}


export default ChooseShopCtrl;
