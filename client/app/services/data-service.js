export function DataServiceRestangular(Restangular, baseServerUrl) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setBaseUrl(baseServerUrl);

    RestangularConfigurer.setDefaultHttpFields({
      'withCredentials': false
    });

    /* Custom response extractor for Restangular  */
    /* This one plays well with djangorestframework */
    RestangularConfigurer.setResponseExtractor(function(response, operation, what, url) {
      var newResponse;
      if (operation === "getList") {
        newResponse = response.results != undefined ? response.results : response;
        newResponse.metadata = {
          count : response.count,
          next : response.next,
          previous : response.previous,
          number : response.number,
        }
      } else {
        newResponse = response;
      }
      return newResponse;
    });

    /* Restangular requestSuffix, appended to all urls -- plays well with django */
    RestangularConfigurer.setRequestSuffix('/?');
  });
}

function DataService(DataServiceRestangular) {
  const svc = {};

  svc.me = DataServiceRestangular.oneUrl("me");
  svc.shops = DataServiceRestangular.service("shops");
  svc.bookings = DataServiceRestangular.service("bookings");

  svc.getResourceTypes = function(shopId){
    return DataServiceRestangular.service("resourcetypes", DataServiceRestangular.one('shops', shopId));
  }

  svc.getResources = function(shopId){
    return DataServiceRestangular.service("resources", DataServiceRestangular.one('shops', shopId));
  }

  svc.getServices = function(shopId){
    return DataServiceRestangular.service("services", DataServiceRestangular.one('shops', shopId));
  }

  //#TODO rename to getShopBookings ..
  svc.getBookings = function(shopId){
    return DataServiceRestangular.service("bookings", DataServiceRestangular.one('shops', shopId));
  }

  svc.getSimpleServices = function(shopId){
    return DataServiceRestangular.service("simpleservices", DataServiceRestangular.one('shops', shopId));
  }

  svc.getShopWeekWorkingHours = function(shopId){
    return DataServiceRestangular.service("weekworkinghours", DataServiceRestangular.one('shops', shopId));
  }

  svc.getShopSpecialWeekWorkingHours = function(shopId){
    return DataServiceRestangular.service("specialworkinghours", DataServiceRestangular.one('shops', shopId));
  }

  svc.getShopClosingDays = function(shopId){
    return DataServiceRestangular.service("closingdays", DataServiceRestangular.one('shops', shopId));
  }

  return svc;
}

export default DataService;
