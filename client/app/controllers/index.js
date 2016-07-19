import angular from 'angular';
import AppCtrl from './app-controller';
import LoginCtrl from './login-controller';
import ChooseShopCtrl from './choose-shop-controller';
import DirectLoginCtrl from './direct-login-controller';
import initialLoader from '../extra-modules/initial-loader';
import '../services';

angular.module('app.controllers', ['app.services', initialLoader])
  .controller('AppCtrl', AppCtrl)
  .controller('LoginCtrl', LoginCtrl)
  .controller('ChooseShopCtrl', ChooseShopCtrl)
  .controller('DirectLoginCtrl', DirectLoginCtrl);
