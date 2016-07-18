import angular from 'angular';
import Preferences from './preferences';
import DataService, { DataServiceRestangular } from './data-service';
import dashLoading from './dash-loading';
import notifyManager from './notify-manager';
import TimeUtils from './time-utils';
import HttpUtils from './http-utils';
import Entities from './entities';

angular.module('app.services', [
    'restangular',
    'angular-storage',
  ])
  .factory('Preferences', Preferences)
  .factory('DataServiceRestangular', DataServiceRestangular)
  .factory('DataService', DataService)
  .factory('dashLoading', dashLoading)
  .factory('notifyManager', notifyManager)
  .factory('TimeUtils', TimeUtils)
  .factory('HttpUtils', HttpUtils)
  .factory('Entities', Entities);
