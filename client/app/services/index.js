import angular from 'angular';
import TestService from './test-service';

angular.module('app.services', [])
  .factory('TestService', TestService);
