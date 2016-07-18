function Preferences(baseServerUrl, store){
  const svc = {}

  svc.getCurrentShopId = () => store.get('currentShopId');
  svc.setCurrentShopId = (shopId) => store.set('currentShopId', shopId);

  svc.clearPreferences = () => {
    store.remove('currentShopId');
  };

  return svc;
}

export default Preferences;
