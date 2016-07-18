import angular from 'angular';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.min.css';
import 'normalize.css';
import './styles/app.css';
import 'lodash';
import 'restangular';
import 'angular-storage';
import './config-modules/constants';
import './config-modules/network';
import './config-modules/satellizer';
import './controllers';
import './services';
import './config-modules/routing';

angular.module('app', [
    'app.constants',
    'app.satellizer',
    'app.network',
    'app.controllers',
    'app.routing',
    ngMaterial,
  ])

  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .run(() => {});
