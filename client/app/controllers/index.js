import angular from 'angular';
import AppCtrl from './app-controller';
import LoginCtrl from './login-controller';
import '../services';

angular.module('app.controllers', ['app.services'])
  .controller('AppCtrl', AppCtrl)
  .controller('LoginCtrl', LoginCtrl);
