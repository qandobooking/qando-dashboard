import angular from 'angular';
import AppCtrl from './app-controller';
import LoginCtrl from './login-controller';
import ChooseShopCtrl from './choose-shop-controller';
import '../services';

angular.module('app.controllers', ['app.services'])
  .controller('AppCtrl', AppCtrl)
  .controller('LoginCtrl', LoginCtrl)
  .controller('ChooseShopCtrl', ChooseShopCtrl);
